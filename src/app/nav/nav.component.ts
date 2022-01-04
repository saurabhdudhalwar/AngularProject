import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServService } from '../shared/service/login-serv.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userShow:boolean | undefined

  constructor(private _login:LoginServService,private _router:Router,private _http:HttpClient) { }

  ngOnInit(): void {
    if(sessionStorage.user=="admin"){
      this.userShow = true;
    }else{
      this.userShow = false;
    }
  }
  

}
