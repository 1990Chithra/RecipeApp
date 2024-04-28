import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userModel } from '../users.model';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {
  server_url= "http://localhost:3000"

  constructor(private http:HttpClient) { }

  addRecipieAPI(user:userModel){
    return this.http.post(`${this.server_url}/recipes`,user);
  }
  viewRecipieAPI(){
    return this.http.get(`${this.server_url}/recipes`);

  }
  deleteRecipieAPI(id:any){
    return this.http.delete(`${this.server_url}/recipes/${id}`);

  }
  getFavouriteAPI(id:any){
    return this.http.get(`${this.server_url}/recipes/${id}`);

  }
}
