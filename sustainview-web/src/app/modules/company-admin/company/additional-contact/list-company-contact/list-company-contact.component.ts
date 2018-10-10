import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../../app-constants';
import { UtilsService, CompanyAdminService } from '../../../../../helpers/services';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-list-company-contact',
  templateUrl: './list-company-contact.component.html',
  styleUrls: ['./list-company-contact.component.scss'],
  providers: [CompanyAdminService]
})
export class ListCompanyContactComponent implements OnInit {
  cols: any[];
  contactsList = [];
  constructor(public utils: UtilsService, private companyAdminService: CompanyAdminService, private messageService: MessageService,
    private router: Router) { }

  ngOnInit() {
    this.cols = [
      { field: 'companyName', header: 'Company Name' },
      { field: 'personName', header: 'Name' },
      { field: 'telePhone', header: 'Phone' },
      { field: 'email', header: 'Email' },
    ];
    this.getCompanyById();
  }
  getCompanyById() {
    this.companyAdminService.getCompanyById().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        const company = result.data.company;
        this.getAllCompanyContacts(company.companyName);
      }
    });
  }
  getAllCompanyContacts(companyName) {
    if (companyName !== undefined) {
      this.companyAdminService.getAllCompanyContacts(companyName).subscribe(result => {
        if (this.utils.isResponseSuccess(result)) {
          this.contactsList = result.data;
        }
      });
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Error Message', detail: 'No Data' });
    }
  }
  routeToUrl() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.ADD_COMPANY_CONTACT]);
  }
  editContact(id) {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.EDIT_COMPANY_CONTACT], { queryParams: { id: this.utils.idEncryption(id) } });
  }
}
