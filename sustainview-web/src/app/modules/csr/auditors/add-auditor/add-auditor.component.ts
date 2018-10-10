import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { UtilsService, CommunicationService } from '../../../../helpers/services';
import { AuditorService } from '../../../../helpers/services';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-add-auditor',
  templateUrl: './add-auditor.component.html',
  styleUrls: ['./add-auditor.component.scss'],
  providers: [AuditorService, MessageService]
})
export class AddAuditorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private auditorService: AuditorService, public utils: UtilsService,
    private communicationService: CommunicationService, private messageService: MessageService,
    private router: Router) { }
  cols: any[];
  id: any = {};
  auditor: any = {};
  countryCodes: any[];
  date = new Date();

  ngOnInit() {
    this.getCountryCodes();
    setTimeout(() => {
      this.utils.materialInput();
    }, 500);
  }


  addAuditor() {
    const registerdDate = moment(this.auditor.registeredOn).format('YYYY-MM-DD');
    this.auditor.registeredOn = registerdDate;
    this.auditor.faxNumer = this.auditor.faxNumer.toString();
    this.auditor.active = 'Y';
    this.auditor.compnayType = 'Verification';
    this.auditor.isoCountryCode = this.auditor.isoCountryCode.countryCodeISO2;
    this.auditorService.addAuditor(this.auditor).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Added Successfully' });
        this.listOfAuditors();
      } else {
        this.messageService.add({ severity: 'error', summary: 'Success Message', detail: 'Process Failed.Please Try Again.' });
        this.listOfAuditors();
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


  listOfAuditors() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITORS]);
  }
}
