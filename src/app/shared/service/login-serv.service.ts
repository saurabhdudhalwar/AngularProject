import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginServService {

  dburl:string="http://localhost:3000/login";

  constructor(private _http:HttpClient) { }
//get user
getUser(){
  return this._http.get(this.dburl);
}

login(user:any){
  sessionStorage.setItem("user",user);
}

logout(){
  sessionStorage.removeItem("user");
  
}

addUser(usr:any){
  return this._http.post(this.dburl,usr)
}

getRecord():Observable<user[]>{
  return this._http.get<user[]>(this.dburl)
}

deleteRecord(id:number){
  const baseurl = `${this.dburl}/${id}`
  return this._http.delete(baseurl)
}
addRecord(usr:any){
  return this._http.post(this.dburl,usr);

}
getSingleRecord(id:number){
  const baseurl=`${this.dburl}/${id}`; 
  return this._http.get(baseurl);
}
upDateRecord(std:any){
  const baseurl=`${this.dburl}/${std.id}`;
  return this._http.put(baseurl,std);
}

}
