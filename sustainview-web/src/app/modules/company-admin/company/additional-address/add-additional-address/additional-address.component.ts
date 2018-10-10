import { Component, OnInit } from '@angular/core';
import { UtilsService, CompanyAdminService, CocService } from '../../../../../helpers/services';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../../app-constants';

@Component({
  selector: 'app-additional-address',
  templateUrl: './additional-address.component.html',
  styleUrls: ['./additional-address.component.scss'],
  providers: [CompanyAdminService, CocService]
})
export class AdditionalAddressComponent implements OnInit {
  country = [];
  companyList = [];
  address: any = {};
  countryObj: any;
  // companyObj: any;
  companyName: any = {};
  constructor(public utils: UtilsService, private companyAdminService: CompanyAdminService, private messageService: MessageService,
    private router: Router, private cocService: CocService) { }

  ngOnInit() {
    this.getCompanyById();
    this.getCountry();
    setTimeout(() => {
      this.utils.materialInput();
    }, 500);
    // this.getCompanyList();
  }
  getCompanyById() {
    this.companyAdminService.getCompanyById().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.companyName = result.data.company;
      }
    });
  }

  getCountry() {
    this.country = [];
    this.companyAdminService.getCountry().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.country = result.data;
      }
    });
  }
  // getCompanyList() {
  //   this.companyList = [];
  //   this.cocService.getAllCompanyList().subscribe(result => {
  //     if (this.utils.isResponseSuccess(result)) {
  //       this.companyList = result.data;
  //     }
  //   });
  // }
  addAddress() {
    this.address.companyName = this.companyName.companyName;
    this.address.countryCode = this.countryObj.countryCodeISO2;
    this.companyAdminService.addAddress(this.address).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Added successfully' });
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.GET_ALL_COMPANY_ADDITIONAL_ADDRESS]);
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Process Failed' });
      }
    });
  }
  addressList() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.GET_ALL_COMPANY_ADDITIONAL_ADDRESS]);
  }
}
