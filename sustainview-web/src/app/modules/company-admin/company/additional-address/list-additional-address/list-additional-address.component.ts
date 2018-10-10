import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../../app-constants';
import { UtilsService, CompanyAdminService } from '../../../../../helpers/services';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-list-additional-address',
  templateUrl: './list-additional-address.component.html',
  styleUrls: ['./list-additional-address.component.scss'],
  providers: [CompanyAdminService]
})
export class ListAdditionalAddressComponent implements OnInit {
  cols: any[];
  address = [];
  companyName: any;
  constructor(public utils: UtilsService, private companyAdminService: CompanyAdminService, private messageService: MessageService,
    private router: Router, ) {
    this.getCompanyById();
  }

  ngOnInit() {
    this.cols = [
      { field: 'companyName', header: 'Company Name' },
      { field: 'addressOne', header: 'Address1' },
      { field: 'addressTwo', header: 'Address2' },
      { field: 'postCode', header: 'Post Code' },
      { field: 'city', header: 'City' },
      { field: 'state', header: 'State' },
      { field: 'countryCode', header: 'ISOCountryCode' },
      { field: 'phoneNumber', header: 'Phone' },
      { field: 'faxNumber', header: 'Fax' },
    ];
  }
  getCompanyById() {
    this.companyAdminService.getCompanyById().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        const company = result.data.company;
        this.getAllCompanyAddress(company.companyName);
      }
    });
  }
  getAllCompanyAddress(companyName) {
    if (companyName !== undefined) {
      this.companyAdminService.getAllCompanyAddress(companyName).subscribe(result => {
        if (this.utils.isResponseSuccess(result)) {
          this.address = result.data;
        }
      });
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Error Message', detail: 'No Data' });
    }
  }
  routeToUrl() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.ADD_COMPANY_ADDITIONAL_ADDRESS]);
  }
  editAddress(id) {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.EDIT_COMPANY_ADDITIONAL_ADDRESS], { queryParams: { id: this.utils.idEncryption(id) } });
  }
}
