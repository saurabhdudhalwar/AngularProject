import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { students } from '../classes/students';

@Injectable({
  providedIn: 'root'
})
export class StdserviceService {

  dburl:string="http://localhost:3000/students";

  constructor(private _http:HttpClient) { }
  // fetch record
  getRecord():Observable<students[]>{
    return this._http.get<students[]>(this.dburl)
  }

// delete record
deleteRecord(id:number){
  const baseurl = `${this.dburl}/${id}`
  return this._http.delete(baseurl)
}
//add record
addRecord(std:any){
  return this._http.post(this.dburl,std);

}
//update record
upDateRecord(std:any){
  const baseurl=`${this.dburl}/${std.id}`;
  return this._http.put(baseurl,std);

}

 // get  single record
 getSingleRecord(id:number){
  const baseurl=`${this.dburl}/${id}`; 
  return this._http.get(baseurl);
}


}




