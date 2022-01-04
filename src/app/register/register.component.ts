import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServService } from '../shared/service/login-serv.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _loginser:LoginServService,private _router:Router) { }

  ngOnInit(): void {
  }

  addUser(val:any){
    const usrObj ={
      user:val.user,
      password:val.password,
      contact:val.contact
    }
    this._loginser.addRecord(usrObj).subscribe(()=>{
      alert("New user is Register!")
      this._router.navigate(['/adduser'])
    })
  }

}
