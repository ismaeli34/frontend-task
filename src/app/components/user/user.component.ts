import { Component,OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  implements OnInit  {

  users:User [] =[];
  loading = false;
  searchText:any;
  filter:any;
  SortDirection ='asc';
  SortbyParam='';
  p:any;
  lists =[
  {value:'name',viewValue:'Name'},
  {value:'gender',viewValue:'Gender'}
]
constructor(private apiService:ApiServiceService,
  private router:Router,
 ){

}
ngOnInit(): void {

  this.loadUsers();
 
}

refreshData(){
  console.log("refresh data called");
  this.loading = true;
  this.loadUsers();

  // this.loading = false;
  setTimeout( () => this.loading = false, 2000 );


}



loadUsers(){
  this.apiService.users().subscribe((data:any)=>{
    this.users = data;
    console.log("USER DATA :"+ this.users); 

  })

}

sortName(){
  console.log("method called");
  this.users = this.users.sort(function(a:any,b:any){
    return b.name - a.name;
  })
}


sortById(){
  console.log("method called 2");
  this.users = this.users.sort(function(a:any,b:any){
    return b.id - a.id;
  })
}

onSortDirection() {
  if (this.SortDirection === 'desc') {
    this.SortDirection = 'asc';
  } else {
    this.SortDirection = 'desc';
  }
}


userDetails(id:any){
  console.log(id);
  this.router.navigate(['user-details',id])

}


}
