import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServService } from '../shared/service/login-serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any;
  pass:any;
  userArray:any;

  constructor(private _dbser:LoginServService,private _router:Router) { }

  ngOnInit(): void {
  }

  check(){
    this._dbser.getUser().subscribe((res)=>{
      this.userArray = res;
    });

    const data = this.userArray.filter((item:any)=>{
      return this.user == item.user && this.pass == item.password
    })
    if(data.length>0){
      this._dbser.login(this.user);
      this._router.navigate(['/students']);
    }else{
      alert("Invalid Username and Password");
      this.user="";
      this.pass="";
    }
  }

}
