import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { UtilsService, CommunicationService } from '../../../../helpers/services';
import { AuditorService } from '../../../../helpers/services';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss'],
  providers: [AuditorService]
})
export class AddAddressComponent implements OnInit {

  constructor(private route: ActivatedRoute, private auditorService: AuditorService, public utils: UtilsService,
    private communicationService: CommunicationService, private messageService: MessageService,
    private router: Router) { }
  cols: any[];
  id: any = {};
  address: any = {};
  countryCodes: any[];
  compName: any = {};

  ngOnInit() {
    this.route.queryParams.subscribe((param: any) => {
      this.compName = param['compName'];
    });
    this.getCountryCodes();
    this.address.companyName = this.compName;
    setTimeout(() => {
      this.utils.materialInput();
    }, 500);
  }


  addAddress() {
    this.address.countryCode = this.address.countryCode.countryCodeISO2;
    this.auditorService.addAddress(this.address).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Added successfully' });
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_ADDRESS], { queryParams: { compName: this.address.companyName } });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Process Failed Plz Try Again' });
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_ADDRESS], { queryParams: { compName: this.address.companyName } });
      }
    });
  }

  listOfAddress() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_ADDRESS], { queryParams: { compName: this.address.companyName } });
  }

  getCountryCodes() {
    this.auditorService.getCountryCodes().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.countryCodes = result.data;
      }
    });
  }
}
