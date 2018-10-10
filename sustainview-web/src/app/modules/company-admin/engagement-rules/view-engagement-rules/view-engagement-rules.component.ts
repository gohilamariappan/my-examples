import { Component, OnInit } from '@angular/core';
import { UtilsService, CommunicationService, CompanyAdminService } from '../../../../helpers/services';
import { MessageService } from 'primeng/api';
import * as moment from 'moment';
import * as _ from 'lodash';
@Component({
  selector: 'app-view-engagement-rules',
  templateUrl: './view-engagement-rules.component.html',
  styleUrls: ['./view-engagement-rules.component.scss'],
  providers: [CompanyAdminService]
})
export class ViewEngagementRulesComponent implements OnInit {
  certificateBody = [];
  engagements = {};
  memberSince: Date;
  reviewEnd: Date;
  reviewStart: Date;
  companyObj: any;
  constructor(public utils: UtilsService, private companyAdminService: CompanyAdminService, private messageService: MessageService,
    private communicationService: CommunicationService) { }
  ngOnInit() {
    this.getCertificateBodyList();
    this.getEngagementRules();
    setTimeout(() => {
      this.utils.materialInput();
    }, 500);
  }
  getEngagementRules() {
    this.companyAdminService.getEngagementRules().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.engagements = result.data.engagements;
        const companyId = this.engagements['cioId'];
        _.forEach(this.certificateBody, (value) => {
          if (value.companyId === companyId) {
            this.companyObj = value;
          }
        });
        const val1 = new Date(this.engagements['memberSince']);
        this.memberSince = val1;
        const val2 = new Date(this.engagements['reviewPeriodEnd']);
        this.reviewEnd = val2;
        const val3 = new Date(this.engagements['reviewPeriodStart']);
        this.reviewStart = val3;
      }
    });
  }

  getCertificateBodyList() {
    this.certificateBody = [];
    this.companyAdminService.getCertificationBodyList().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.certificateBody = result.data;
      }
    });
  }
  updateEngagement(engagement) {
    const obj = {
      'id': engagement.id,
      'cioId': this.companyObj.companyId,
      'memberSince': moment(this.memberSince).format('YYYY-MM-DD'),
      'reviewFrequency': engagement.reviewFrequency,
      'reviewPeriodStart': moment(this.reviewStart).format('YYYY-MM-DD'),
      'reviewPeriodEnd': moment(this.reviewEnd).format('YYYY-MM-DD'),
      'reviewPeriodAuditTarget': engagement.reviewPeriodAuditTarget,
      'userId': 'root@sustainview.com',
      'touchTime': null
    };
    this.companyAdminService.updateEngagement(obj).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Updated Successfully' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Process Failed' });
      }
    });
  }
}
