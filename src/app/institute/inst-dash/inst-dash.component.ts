import { Component, OnInit } from '@angular/core';
import { InstserviceService } from 'src/app/shared/service/instservice.service';
import {  TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-inst-dash',
  templateUrl: './inst-dash.component.html',
  styleUrls: ['./inst-dash.component.css']
})
export class InstDashComponent implements OnInit {
  modalRef?: BsModalRef;
  searchRecord:string="";
  order:string="name";
  toggel:boolean=false;
  p:number=1;
  
  constructor(private _dbser:InstserviceService, private modalService: BsModalService) { }

  institute:any;

  ngOnInit(): void {
    this.fetchRecord();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  fetchRecord(){
    this._dbser.getRecord().subscribe((res)=>{
      this.institute=res;
    })
  }

  DeleteRecord(val:any){
    if(confirm(`You are sure to remove this Branch with ID ${val}`)){
      this._dbser.deleteRecord(val).subscribe(()=>{
        alert("Institute Remove Successfully")
        this.fetchRecord();
      })
    }

  }

}
