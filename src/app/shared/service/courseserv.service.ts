import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { course } from '../classes/course';

@Injectable({
  providedIn: 'root'
})
export class CourseservService {

  dburl:string="http://localhost:3000/course";

  constructor(private _http:HttpClient) { }

  getRecord():Observable<course[]>{
    return this._http.get<course[]>(this.dburl);
  }

  deleteRecord(id:number){
    const baseurl = `${this.dburl}/${id}`
    return this._http.delete(baseurl)
  }
  addRecord(cor:any){
    return this._http.post(this.dburl,cor)
  }
  upDaterecord(cor:any){
    const baseurl = `${this.dburl}/${cor.id}`
    return this._http.put(baseurl,cor)
  }
  getSingleRecord(id:number){
    const baseurl = `${this.dburl}/${id}`
    return this._http.get(baseurl)
  }
}
