import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StdserviceService } from 'src/app/shared/service/stdservice.service';

@Component({
  selector: 'app-stdedit',
  templateUrl: './stdedit.component.html',
  styleUrls: ['./stdedit.component.css']
})
export class StdeditComponent implements OnInit {

  id:number=0;
  stdObj:any;

  constructor(private _actRout:ActivatedRoute,private _dbser:StdserviceService,private _router:Router) { }

  ngOnInit(): void {
    this._actRout.paramMap.subscribe((para)=>{
      this.id=Number(para.get('id'))
    })
    this._dbser.getSingleRecord(this.id).subscribe((res)=>{
      //console.log(res);
      this.stdObj={...res};
    })
  }
  sendData(val: any) {
    const stdObj = {
      id:this.id,
      stdName: val.name,
      contact: val.contact,
      stdEmail: val.email
    }
    this._dbser.upDateRecord(stdObj).subscribe(()=>{
      alert("Record Edited successfully");
      this._router.navigate(['/students']);
    })
  }

}
