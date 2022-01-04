import { Component, OnInit } from '@angular/core';
import { LoginServService } from '../shared/service/login-serv.service';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  p: number = 1;
  searchRecord:string="";
  constructor(private _dbser:LoginServService) { }

  user:any;

  ngOnInit(): void {

    this.fetchData();
    
  }
  fetchData(){
    this._dbser.getRecord().subscribe((res)=>{
      this.user=res;
    })
  }


  deleteData(val:any){
    if(confirm(`You are sure to remove the User with ID ${val}`)){
      this._dbser.deleteRecord(val).subscribe(()=>{
        alert("Record deleted successfully");
        this.fetchData();
      })
    }
  }
}
