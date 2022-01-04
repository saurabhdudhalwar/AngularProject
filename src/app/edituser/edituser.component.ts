import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServService } from '../shared/service/login-serv.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  id:number=0;
  usrObj:any;

  constructor(private _actRout:ActivatedRoute,private _router:Router,private _dbser:LoginServService) { }

  ngOnInit(): void {
    this._actRout.paramMap.subscribe((para)=>{
      this.id=Number(para.get('id'))

    })
    this._dbser.getSingleRecord(this.id).subscribe((res)=>{
      this.usrObj={...res}
    })
  }

  sendData(val:any){
    const usrObj={
      id:this.id,
      user:val.user,
      password:val.password,
      contact:val.contact
    }
    this._dbser.upDateRecord(usrObj).subscribe(()=>{
      alert("Record edited successfully") 
      this._router.navigate(['/adduser'])
    })
  }

}
