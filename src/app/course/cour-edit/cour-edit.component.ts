import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseservService } from 'src/app/shared/service/courseserv.service';

@Component({
  selector: 'app-cour-edit',
  templateUrl: './cour-edit.component.html',
  styleUrls: ['./cour-edit.component.css']
})
export class CourEditComponent implements OnInit {
  id: number = 0;
  courObj:any;

  constructor(private _actRout:ActivatedRoute,private _dbser:CourseservService,private _router:Router) { }

  ngOnInit(): void {
    this._actRout.paramMap.subscribe((para)=>{
      this.id=Number(para.get('id'))
    })
    this._dbser.getSingleRecord(this.id).subscribe((res)=>{
      this.courObj={...res}
    })
  }

  sendData(val:any){
    const courObj={
      id:this.id,
      course:val.course,
      duration:val.duration,
      fees:val.fees
    }
    this._dbser.upDaterecord(courObj).subscribe(()=>{
      alert("Record Edited Successfully")
      this._router.navigate(['/course'])
    })

  }

}
