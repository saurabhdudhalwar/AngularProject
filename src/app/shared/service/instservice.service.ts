import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { institute } from '../classes/institute';

@Injectable({
  providedIn: 'root'
})
export class InstserviceService {

  dburl="http://localhost:3000/institute";

  constructor(private _http:HttpClient) { }
  
  //fetch record
  getRecord():Observable<institute[]>{
    return this._http.get<institute[]>(this.dburl);

  }
  //delete record
  deleteRecord(id:number){
    const baseurl = `${this.dburl}/${id}`
    return this._http.delete(baseurl)

  }
  //add Record
  addRecord(inst:any){
    return this._http.post(this.dburl,inst)
  }

  //update record
  updateRecord(inst:any){
    const baseurl = `${this.dburl}/${inst.id}`
    return this._http.put(baseurl,inst)
  }

  //get single record
  SingleRecord(id:number){
    const baseurl = `${this.dburl}/${id}`
    return this._http.get(baseurl)

  }

}
