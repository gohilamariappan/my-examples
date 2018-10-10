import { Component, OnInit } from '@angular/core';
import { UtilsService, CompanyAdminService, CocService } from '../../../../../helpers/services';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../../app-constants';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-edit-company-contact',
  templateUrl: './edit-company-contact.component.html',
  styleUrls: ['./edit-company-contact.component.scss'],
  providers: [CompanyAdminService, ConfirmationService]
})
export class EditCompanyContactComponent implements OnInit {
  id: any;
  contactObj: any = {};
  location = [];
  companyObj = {};
  locationObj: any;
  constructor(public utils: UtilsService, private companyAdminService: CompanyAdminService, private messageService: MessageService,
    private router: Router, private route: ActivatedRoute, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe((param: any) => {
        this.id = param['id'];
      });
    setTimeout(() => {
      this.utils.materialInput();
    }, 500);
    this.id = this.utils.idDecryption(this.id);
    this.getBaseLocation();
    this.getCompanyById();
    this.getContactBasedOnId(this.id);
  }
  getContactBasedOnId(id) {
    this.companyAdminService.getCompanyContactById(id).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.contactObj = result.data;
      }
    });
  }
  routeUrl() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_COMPANY_CONTACT]);
  }
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
        this.companyObj = result.data.company;

      }
    });
  }
  updateContact() {
    this.contactObj.companyName = this.companyObj['companyName'];
    this.contactObj.baseLocation = this.locationObj.baseLocation;
    this.companyAdminService.updateCompanyContactById(this.contactObj).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_COMPANY_CONTACT]);
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Updated Successfully' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Process Failed' });
      }
    });
  }
  deleteContact() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.companyAdminService.delCompanyContactById(this.id).subscribe(result => {
          if (this.utils.isResponseSuccess(result)) {
            this.messageService.add({ severity: 'success', summary: 'Delete Message', detail: 'Deleted Successfully' });
            this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_COMPANY_CONTACT]);
          }
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Data not deleted', detail: '' });
      }
    });
  }

}
