import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { UtilsService, CommunicationService } from '../../../../helpers/services';
import { AuditorService } from '../../../../helpers/services';
import * as moment from 'moment';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-view-auditor',
  templateUrl: './view-auditor.component.html',
  styleUrls: ['./view-auditor.component.scss'],
  providers: [AuditorService, ConfirmationService]
})
export class ViewAuditorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private auditorService: AuditorService, public utils: UtilsService,
    private confirmationService: ConfirmationService, private messageService: MessageService,
    private communicationService: CommunicationService,
    private router: Router) { }

  cols: any[];
  id: any = {};
  auditor: any = {};
  countryCodes: any[];
  date = new Date();


  ngOnInit() {
    this.route.queryParams.subscribe((param: any) => {
      this.id = param['id'];
    });
    this.viewAuditorById(this.id);
    this.getCountryCodes();
  }

  viewAuditorById(id) {
    this.auditorService.getAuditorDetailsById(id).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.auditor = result.data;
        this.auditor.registeredOn = this.auditor.registeredOn.split('')[0];
        this.auditor.registeredOn = new Date(this.auditor.registeredOn);
        this.date = new Date(this.auditor.registeredOn);

      }
    });
  }

  getCountryCodes() {
    this.auditorService.getCountryCodes().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.countryCodes = result.data;
      }
    });
  }

  updateAuditor() {
    const registerdDate = moment(this.auditor.registeredOn).format('YYYY-MM-DD');
    this.auditor.registeredOn = registerdDate;
    this.auditor.faxNumer = this.auditor.faxNumer.toString();
    this.auditor.active = 'Y';
    this.auditor.isoCountryCode = this.auditor.isoCountryCode.countryCodeISO2;
    this.auditorService.updateAuditor(this.auditor).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.messageService.add({ severity: 'success', summary: 'Update Message', detail: 'Updated Successfully' });
        this.listOfAuditors();
      } else {
        this.messageService.add({ severity: 'error', summary: 'Update Message', detail: 'Process Failed.Please Try Again.' });
        this.listOfAuditors();
      }
    });
  }


  listOfAuditors() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITORS]);
  }

}
