import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServService } from '../shared/service/login-serv.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _log:LoginServService,public _router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    if(confirm("Are you sure to logout")){
      this._log.logout();
      this._router.navigate(["/"]);
    }
  }

}
