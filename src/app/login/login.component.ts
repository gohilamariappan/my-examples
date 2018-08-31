import { Component, OnInit } from '@angular/core';
import { USER_DETAILS } from '../models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  userDetails: any = [];
  loginResponse: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.userDetails = USER_DETAILS.Employees;
    let url = this.router.url;
    if (url == "/login") {
      this.loginResponse = false;
      localStorage.setItem("topNav", JSON.stringify(this.loginResponse));
    }

  }

  /*
   Login functionality
  */

  login() {
    this.loginResponse = false;
    for (let i = 0; i < this.userDetails.length; i++) {
      let temp = this.userDetails[i];
      if (temp.emailAddress == this.username && temp.password == this.password) {
        this.loginResponse = true;
        localStorage.setItem("topNav", JSON.stringify(this.loginResponse));
    }
  }
    if (this.loginResponse) {
      window.location.reload();
      this.router.navigate(['home']);
    } else {
      this.loginResponse = false;
      localStorage.setItem("topNav", JSON.stringify(this.loginResponse));
      alert("failure");
    }
  }

}
