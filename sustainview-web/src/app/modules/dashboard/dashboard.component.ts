import { Component, OnInit } from '@angular/core';
import { SUSTAIN_VIEW } from '../../app-constants';
import { DashboardService, UtilsService, CommunicationService } from '../../helpers/services';
import * as _ from 'lodash';
import * as moment from 'moment';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  type: string;
  stacked = [];
  planSix = [];
  planThree = [];
  plan = [];
  compliances = [];
  year: any;
  preYear: any;
  overallstatus = [];
  constructor(private dashboardService: DashboardService, public utils: UtilsService,
    private communicationService: CommunicationService, ) {
  }

  ngOnInit() {
    this.year = moment().format('YYYY');
    this.getPlannings();
    this.getNonCompliance(this.year);
    this.getOverAllStatus(this.year);
    this.preYear = moment().subtract(1, 'year').format('YYYY');
    for (let i = this.preYear; i <= this.year; i++) {
      // tslint:disable-next-line:quotemark
      $('#ddlYear').append("<option value='" + i + "'>" + i + "</option>");
    }
  }
  getYear(year) {
    this.getNonCompliance(year);
    this.getOverAllStatus(year);
  }
  getPlannings() {
    this.dashboardService.getPlannings().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        const plan = result.data;
        for (let i = 0; i < plan.length; i++) {
          if (plan[i].flag === 'green3' || plan[i].flag === 'amber3' || plan[i].flag === 'red3') {
            this.planThree.push(plan[i]);
          } else {
            this.planSix.push(plan[i]);
          }
        }
      }
    });
  }
  getNonCompliance(year) {
    this.compliances = [];
    this.dashboardService.getNonCompliance(year).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.compliances = result.data;
        this.compliances.sort(function (a, b) {
          return a.sectionCode - b.sectionCode;
        });
      }
    });
  }
  getOverAllStatus(year) {
    this.stacked = [];
    this.dashboardService.getOverAllStatus(year).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.overallstatus = result.data;
        this.stacked.push({
          value: 25,
          type: 'warning',
          label: 25 + ' %' + '  (6,44,767)'
        }, {
            value: 25,
            type: 'success',
            label: 25 + ' %' + ' (4,33,00)'
          },
          {
            value: 50,
            type: 'danger',
            label: 50 + ' %' + ' (4,33,00)'
          });

      }
    });
  }
}
