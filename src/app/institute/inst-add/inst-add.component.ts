import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstserviceService } from 'src/app/shared/service/instservice.service';

@Component({
  selector: 'app-inst-add',
  templateUrl: './inst-add.component.html',
  styleUrls: ['./inst-add.component.css']
})
export class InstAddComponent implements OnInit {

  constructor(private _dbser:InstserviceService,private _router:Router) { }

  ngOnInit(): void {
  }
  sendData(val:any){
    const instObj ={
      branch:val.branch,
      city:val.city,
      contact:val.contact
    }
    this._dbser.addRecord(instObj).subscribe(()=>{
      alert("New Institute Added Successfully")
      this._router.navigate(['/institute'])
    })
  }

}
