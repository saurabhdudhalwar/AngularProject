import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseservService } from 'src/app/shared/service/courseserv.service';

@Component({
  selector: 'app-cour-add',
  templateUrl: './cour-add.component.html',
  styleUrls: ['./cour-add.component.css']
})
export class CourAddComponent implements OnInit {

  constructor(private _dbser:CourseservService, private _router:Router) { }

  ngOnInit(): void {
  }

  sendData(val:any){
    const courObj={
      course:val.course,
      duration:val.duration,
      fees:val.fees
    }
    this._dbser.addRecord(courObj).subscribe(()=>{
      alert("Your New course Added")
      this._router.navigate(['/course'])
    })
  }

}
