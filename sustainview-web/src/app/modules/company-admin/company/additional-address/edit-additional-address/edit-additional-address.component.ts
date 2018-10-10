import { Component, OnInit } from '@angular/core';
import { UtilsService, CompanyAdminService, CocService } from '../../../../../helpers/services';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../../app-constants';
import { ConfirmationService } from 'primeng/api';
import * as _ from 'lodash';
@Component({
  selector: 'app-edit-additional-address',
  templateUrl: './edit-additional-address.component.html',
  styleUrls: ['./edit-additional-address.component.scss'],
  providers: [CompanyAdminService, ConfirmationService]
})
export class EditAdditionalAddressComponent implements OnInit {
  id: any;
  addressObj: any = {};
  country = [];
  countryObj: any;
  constructor(public utils: UtilsService, private companyAdminService: CompanyAdminService, private messageService: MessageService,
    private router: Router, private route: ActivatedRoute, private confirmationService: ConfirmationService, ) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe((param: any) => {
        this.id = param['id'];
      });
    this.id = this.utils.idDecryption(this.id);
    this.getCountry();
    this.getAddressBasedOnId(this.id);
    setTimeout(() => {
      this.utils.materialInput();
    }, 500);
  }
  getCountry() {
    this.companyAdminService.getCountry().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.country = result.data;
        const countryCode = this.addressObj.countryCode;
        _.forEach(this.country, (value, key) => {
          if (value.countryCodeISO2 === countryCode) {
            this.countryObj = value;
          }
        });
      }
    });
  }
  addressList() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.GET_ALL_COMPANY_ADDITIONAL_ADDRESS]);
  }
  getAddressBasedOnId(id) {
    this.companyAdminService.getCompanyAddressById(id).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.addressObj = result.data;
      }
    });
  }

  updateAddressById() {
    this.addressObj.countryCode = this.countryObj.countryCodeISO2,
      this.companyAdminService.updateCompanyAddressById(this.addressObj).subscribe(result => {
        if (this.utils.isResponseSuccess(result)) {
          this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.GET_ALL_COMPANY_ADDITIONAL_ADDRESS]);
          this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Updated Successfully' });
        } else {
          this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Process Failed' });
        }
      });
  }
  deleteAddressById() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.companyAdminService.deleteAddress(this.id).subscribe(result => {
          if (this.utils.isResponseSuccess(result)) {
            this.messageService.add({ severity: 'success', summary: 'Delete Message', detail: 'Deleted Successfully' });
            this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.GET_ALL_COMPANY_ADDITIONAL_ADDRESS]);
          }
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Data not deleted', detail: '' });
      }
    });
  }
}
