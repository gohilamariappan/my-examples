import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { UtilsService, CommunicationService } from '../../../../helpers/services';
import { AuditorService } from '../../../../helpers/services';
import * as moment from 'moment';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CaparService } from '../../../../helpers/services';

@Component({
  selector: 'app-view-capar',
  templateUrl: './view-capar.component.html',
  styleUrls: ['./view-capar.component.scss'],
  providers: [ConfirmationService, CaparService]
})
export class ViewCaparComponent implements OnInit {

  constructor(private route: ActivatedRoute, private caparService: CaparService, public utils: UtilsService,
    private confirmationService: ConfirmationService, private messageService: MessageService,
    private communicationService: CommunicationService,
    private router: Router) { }


  cols: any[];
  id: any = {};
  caparDetails: any = {};
  capars: any = [];
  auditSectionCode: any = {};
  auditSectionSubCode: any = {};
  auditorsList: any = [];
  auditTypes: any = ['Initial', 'Re-Audit'];
  caparStatus: any = ['Open', 'Resloved', 'Closed'];
  finidingTypes: any = ['Non-compliance', 'Area of improvement'];

  ngOnInit() {
    this.route.queryParams.subscribe((param: any) => {
      this.id = param['id'];
    });
    this.viewCaparDetails(this.id);
    this.getAuditSectionCode();
    this.getAuditors();
  }

  viewCaparDetails(id) {
    this.caparService.getCaparDetailsById(this.id).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.caparDetails = result.data;
      }
    });
  }

  getAuditSectionCode() {
    this.caparService.getAuditSectionCode().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.auditSectionCode = result.data;
      }
    });
  }

  getSubSectionCodeDropDown(secId) {
    this.caparService.getAuditSectionSubCode(secId).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.auditSectionSubCode = result.data;
      }
    });
  }

  getAuditors() {
    this.caparService.getListOfAuditors().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.auditorsList = result.data;
      }
    });
  }

  listOfCapar() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_CAPAR]);
  }

  updateCapar() {

  }
}
