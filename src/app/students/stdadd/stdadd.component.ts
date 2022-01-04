import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StdserviceService } from 'src/app/shared/service/stdservice.service';

@Component({
  selector: 'app-stdadd',
  templateUrl: './stdadd.component.html',
  styleUrls: ['./stdadd.component.css']
  
})
export class StdaddComponent implements OnInit {
  sData: any;
  status:any;
  light:any;
  batch:any;
  Course=["Full stack","java","C/C++","Phython","Mern Stack","Mean Stack","Other"]
  quaL=["SSC","HSC","BSC","MSC","BCA","BCS","BE","B.COM","BA","OTHER"]
  worK=[1,2,3,4,5]
  Place=["Faacebook","Linkdin","Naukari.com","News Paper","Telegram","from former student","other"]
  constructor(private _dbser: StdserviceService, private _router: Router) { }

  ngOnInit(): void {
  }

  sendData(val: any) {
    const stdObj = {
      stdName: val.name,
      contact: val.contact,
      stdEmail: val.email
    }
    this._dbser.addRecord(stdObj).subscribe(()=>{
      alert("Record Added successfully");
      this._router.navigate(['/students']);
    })

  }

}
