import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CourseservService } from 'src/app/shared/service/courseserv.service';

@Component({
  selector: 'app-cour-dash',
  templateUrl: './cour-dash.component.html',
  styleUrls: ['./cour-dash.component.css']
})
export class CourDashComponent implements OnInit {
  modalRef?: BsModalRef;
  p: number = 1;
  searchRecord:string="";
  

  constructor(private _dbser: CourseservService,private modalService: BsModalService) { }
  course: any
  ngOnInit(): void {
    this.fetchRecord()
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  fetchRecord() {
    this._dbser.getRecord().subscribe((res) => {
      this.course = res;
    })
  }
  deleteData(val:any){
    if(confirm("You are sure to Delete This course Record!")){
      this._dbser.deleteRecord(val).subscribe(()=>{
        alert("This Record deleted Successfully")
        this.fetchRecord()
      })
    }
  }

}
