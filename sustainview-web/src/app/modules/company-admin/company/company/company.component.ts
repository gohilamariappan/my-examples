import { Component, OnInit } from '@angular/core';
import { UtilsService, CommunicationService, CompanyAdminService } from '../../../../helpers/services';
import * as _ from 'lodash';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  providers: [CompanyAdminService]
})
export class CompanyComponent implements OnInit {
  company: any = {};
  companyContact: any = {};
  companyAddress: any = {};
  currency: any = [{ name: 'EUR' }, { name: 'USD' }];
  country = [];
  countryObj: any;
  currencyObj: any;
  constructor(public utils: UtilsService, private companyAdminService: CompanyAdminService, private messageService: MessageService,
    private communicationService: CommunicationService, private router: Router) { }

  ngOnInit() {
    this.getCompanyById();
    this.getCountry();
    setTimeout(() => {
      this.utils.materialInput();
    }, 500);
  }

  getCountry() {
    this.companyAdminService.getCountry().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.country = result.data;
        const countryCode = this.companyAddress.isoCountryCode;
        this.countryObj = {};
        _.forEach(this.country, (value, key) => {
          if (value.countryCodeISO2 === countryCode) {
            this.countryObj = value;
          }
        });
      }
    });
  }

  getCompanyById() {
    this.companyAdminService.getCompanyById().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        if (this.company !== undefined || this.company !== null) {
          this.company = result.data.company;
          this.companyContact = result.data.company.contact;
          this.companyAddress = result.data.company.address;
          const currencyValue = this.company.centralCurrencyCode;
          this.currencyObj = {};
          _.forEach(this.currency, (value) => {
            if (value.name === currencyValue) {
              this.currencyObj = value;
            }
          });
        }
      }
    });
  }
  updateCompany() {
    const obj = {
      'companyId': this.company.companyId,
      'companyName': this.company.companyName,
      'companyType': this.company.companyType,
      'centralCurrencyCode': this.currencyObj.name,
      'companyDomain': this.company.companyDomain,
      'registeredOn': '2018-07-09',
      'address': {
        'address1': this.companyAddress.address1,
        'address2': this.companyAddress.address2,
        'postcode': this.companyAddress.postcode,
        'cityName': this.companyAddress.cityName,
        'stateRegion': this.companyAddress.stateRegion,
        'isoCountryCode': this.countryObj.countryCodeISO2,
        'telephoneNumber': this.companyAddress.telephoneNumber,
        'faxNumber': this.companyAddress.faxNumber
      },
      'contact': {
        'contactPersonName': this.companyContact.contactPersonName,
        'contactTelephone': this.companyContact.contactTelephone,
        'contactEmail': this.companyContact.contactEmail
      }
    };
    this.companyAdminService.updateCompany(obj).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Updated Successfully' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Operation Failed' });
      }
      // }if (this.utils.validatorMessage(result, 'Sucess', 'Updated Successfully')) {
      // }
    });
  }
  routeTo(url) {
    switch (url) {
      case 'engagementRules': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.VIEW_ENGAGEMENT_RULES]);
        break;
      case 'address': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.GET_ALL_COMPANY_ADDITIONAL_ADDRESS]);
        break;
      case 'contact': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_COMPANY_CONTACT]);
        break;
    }

  }
}
