import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServService } from '../shared/service/login-serv.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLog = sessionStorage.getItem("user")
  
  constructor(private _log:LoginServService,public _router:Router) { }

  ngOnInit(): void {

   
  }

}
