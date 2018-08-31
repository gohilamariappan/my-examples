import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hiscom',
  templateUrl: './hiscom.component.html',
  styleUrls: ['./hiscom.component.scss']
})
export class HiscomComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  historymthd()
  {
    this.router.navigate(['history-performance']);
  }

}
