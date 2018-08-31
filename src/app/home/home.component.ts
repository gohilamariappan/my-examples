import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  notify()
  {
    this.router.navigate(['notification']);
  }
  list()
  {
    this.router.navigate(['home-employee-listt']);
  }
}
