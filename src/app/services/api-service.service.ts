import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  
  constructor(private http:HttpClient) { }

  /**
   * 
   * @returns it fetches a list of all users and 
   * returns an observable of an array of User objects.
   */
  public users():Observable<User[]>{
    console.log("URL :"+ `${baseUrl}/users`);
    return this.http.get<User[]>(`${baseUrl}/users`);
  }

  /**
   * This method fetches details for a specific user based on the user ID.
   * @param userId 
   * @returns 
   */
  public getUserDetail(userId:any){
    return this.http.get(`${baseUrl}/users/${userId}`);
  }

  /**
   * This method fetches posts for a specific user based on the user ID.
   * @param userId 
   * @returns 
   */

  public getUserPost(userId:any){
    return this.http.get(`${baseUrl}/users/${userId}/posts`);
  }

  public addUser(user:any){
    return this.http.post(`${baseUrl}/users/`,user)
  }



}
