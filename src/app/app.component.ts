import { Component, OnInit } from '@angular/core';
import { User } from './model/user.model';
import { Pipe, PipeTransform } from '@angular/core'
import { ApiServiceService } from './services/api-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){

  }
  ngOnInit(): void {
  }

  



}
