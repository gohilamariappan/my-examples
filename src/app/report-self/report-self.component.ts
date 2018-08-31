import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-report-self',
  templateUrl: './report-self.component.html',
  styleUrls: ['./report-self.component.scss']
})
export class ReportSelfComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }  
}
