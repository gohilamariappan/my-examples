import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../../app-constants';
import { UtilsService, CompanyAdminService } from '../../../../../helpers/services';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-additional-contact',
  templateUrl: './additional-contact.component.html',
  styleUrls: ['./additional-contact.component.scss'],
  providers: [CompanyAdminService]
})
export class AdditionalContactComponent implements OnInit {
  contactObj: any = {};
  companyList = [];
  companyName: any;
  location = [];
  locationObj: any;
  constructor(public utils: UtilsService, private companyAdminService: CompanyAdminService, private messageService: MessageService,
    private router: Router) { }

  ngOnInit() {
    this.getCompanyById();
    this.getBaseLocation();
    setTimeout(() => {
      this.utils.materialInput();
    }, 500);
  }
  // getCompanyList() {
  //   this.companyList = [];
  //   this.companyAdminService.getAllCompanyList().subscribe(result => {
  //     if (this.utils.isResponseSuccess(result)) {
  //       this.companyList = result.data;
  //     }
  //   });
  // }
  getBaseLocation() {
    this.companyAdminService.getBaseLocation().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.location = result.data;
      }
    });
  }
  getCompanyById() {
    this.companyAdminService.getCompanyById().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.companyName = result.data.company;
      }
    });
  }
  addContact() {
    this.contactObj.companyName = this.companyName.companyName;
    this.contactObj.baseLocation = this.locationObj.baseLocation;
    this.companyAdminService.addCompanyContact(this.contactObj).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_COMPANY_CONTACT]);
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Added Successfully' });
      }
    });
  }
}
