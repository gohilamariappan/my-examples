import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { UtilsService, CommunicationService } from '../../../../helpers/services';
import { AuditorService } from '../../../../helpers/services';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-view-address',
  templateUrl: './view-address.component.html',
  styleUrls: ['./view-address.component.scss'],
  providers: [AuditorService, ConfirmationService]
})
export class ViewAddressComponent implements OnInit {

  constructor(private route: ActivatedRoute, private auditorService: AuditorService, public utils: UtilsService,
    private communicationService: CommunicationService,
    private confirmationService: ConfirmationService, private messageService: MessageService,
    private router: Router) { }
  address: any = {};
  id: {};
  countryCodes: any[];

  ngOnInit() {
    this.route.queryParams.subscribe((param: any) => {
      this.id = param['id'];
    });
    this.viewAddressById(this.id);
    this.getCountryCodes();
  }


  viewAddressById(id) {
    this.auditorService.getAddressById(id).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
     this.address = result.data;
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

  listOfAddress() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_ADDRESS], { queryParams: { compName: this.address.companyName } });
  }

  updateAddress() {
    this.address.isoCountryCode = this.address.countryCode.countryCodeISO2;
    this.auditorService.updateAddressById(this.address).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.messageService.add({ severity: 'success', summary: 'Update Message', detail: 'Updated Successfully' });
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_ADDRESS], { queryParams: { compName: this.address.companyName } });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Update Message', detail: 'Process Failed. Please Try Again' });
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_ADDRESS], { queryParams: { compName: this.address.companyName } })
      }
    });
  }

  deleteAddress() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.auditorService.deleteAddress(this.id).subscribe(result => {
          if (this.utils.isResponseSuccess(result)) {
            this.messageService.add({ severity: 'success', summary: 'Delete Message', detail: 'Deleted Successfully' });
            this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_ADDRESS], { queryParams: { compName: this.address.companyName } });
          }
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'info', summary: 'Data not Deleted', detail: 'Failed' });
      }
    });
  }

}
