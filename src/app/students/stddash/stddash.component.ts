import { Component, OnInit } from '@angular/core';
import { StdserviceService } from 'src/app/shared/service/stdservice.service';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-stddash',
  templateUrl: './stddash.component.html',
  styleUrls: ['./stddash.component.css']
})
export class StddashComponent implements OnInit {
  modalRef?: BsModalRef;
  p: number = 1;
  searchRecord:string="";

  constructor(private _dbser:StdserviceService,private modalService: BsModalService) { }

  students:any;

  ngOnInit(): void {
    this.fetchData();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  fetchData(){
    this._dbser.getRecord().subscribe((res)=>{
      this.students=res;
    })
  }

  deleteData(val:any){
    if(confirm(`You are sure to remove the record with ID ${val}`)){
      this._dbser.deleteRecord(val).subscribe(()=>{
        alert("Record deleted successfully");
        this.fetchData();
      })
    }
  }

}
