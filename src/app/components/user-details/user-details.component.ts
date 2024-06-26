import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { ApiServiceService } from 'src/app/services/api-service.service';
import {MatDialog} from '@angular/material/dialog';
import { UserPostDialogComponent } from 'src/app/dialogs/user-post-dialog/user-post-dialog.component';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

  id:any;
  userDetails: any;
  userPosts:any;
  numberOfPosts :any;


  constructor(
    private apiService:ApiServiceService,
    private route:ActivatedRoute,
    public dialog: MatDialog){

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    console.log('ID', this.id);
    this.getUserDetails();
    

  }

  getUserDetails(){
    this.apiService.getUserDetail(this.id).subscribe((res)=>{
      console.log("json response"+res);
      this.userDetails = res;
    })
  }

  showPosts(){

    this.apiService.getUserPost(this.id).subscribe((res)=>{
      this.numberOfPosts = res;
      console.log("json response",  this.numberOfPosts);
      console.log("length",  this.numberOfPosts.length);

      


      const dialogRef = this.dialog.open(UserPostDialogComponent,{
        data: res
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    })

  }

}
