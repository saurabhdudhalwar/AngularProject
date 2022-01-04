import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstserviceService } from 'src/app/shared/service/instservice.service';

@Component({
  selector: 'app-inst-edit',
  templateUrl: './inst-edit.component.html',
  styleUrls: ['./inst-edit.component.css']
})
export class InstEditComponent implements OnInit {

  id:number=0;
  instObj:any;

  constructor(private _actRout:ActivatedRoute,private _instSer:InstserviceService,private _rout:Router) { }

  ngOnInit(): void {
    this._actRout.paramMap.subscribe((para)=>{
      this.id=Number(para.get('id'))
    })
    this._instSer.SingleRecord(this.id).subscribe((res)=>{
      this.instObj={...res};
    })
  }
  sendData(val:any){
    const instObj = {
      id:this.id,
      branch:val.branch,
      city:val.city,
      contact:val.contact
    }
    this._instSer.updateRecord(instObj).subscribe(()=>{
      alert('Record Updated Successfully');
      this._rout.navigate(['/institute'])
    })
  }

}
