import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-history-performance',
  templateUrl: './history-performance.component.html',
  styleUrls: ['./history-performance.component.scss']
})
export class HistoryPerformanceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  historyall()
  {
    this.router.navigate(['history-employee']);
  }

}
