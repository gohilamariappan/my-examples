import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { UtilsService, CompanyAdminService } from '../../../../helpers/services';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import * as _ from 'lodash';
@Component({
  selector: 'app-list-company-user',
  templateUrl: './list-company-user.component.html',
  styleUrls: ['./list-company-user.component.scss'],
  providers: [CompanyAdminService, ConfirmationService]
})
export class ListCompanyUserComponent implements OnInit {
  cols: any[];
  users = [];
  constructor(public utils: UtilsService, private companyAdminService: CompanyAdminService, private messageService: MessageService,
    private router: Router, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.cols = [
      { field: 'status', header: 'Status' },
      { field: 'loginid', header: 'User Id' },
      { field: 'userDisplayName', header: 'User Name' },
      { field: 'profile', header: 'Role' },
    ];
    this.getAllCompanyUsers();
  }
  getAllCompanyUsers() {
    this.companyAdminService.getAllCompanyUsers().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.users = result.data.users;
        _.forEach(this.users, (value, key) => {
          if (value.active === 'Y') {
            this.users[key].status = 'active';
          } else if (value.active === 'N') {
            this.users[key].status = 'inactive';
          }
        });
      }
    });
  }
  deActivate(id) {
    this.confirmationService.confirm({
      message: 'Do you want to deactivate company user?',
      header: 'Deactivation Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.companyAdminService.deActivate(id).subscribe(result => {
          if (this.utils.isResponseSuccess(result)) {
            this.messageService.add({ severity: 'success', summary: '', detail: 'Deactivated Successfully' });
            this.getAllCompanyUsers();
          }
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'info', summary: 'Data not Deactivated', detail: 'Failed' });
      }
    });
  }

  activate(id) {
    this.confirmationService.confirm({
      message: 'Do you want to activate company user?',
      header: 'Activation Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.companyAdminService.activate(id).subscribe(result => {
          if (this.utils.isResponseSuccess(result)) {
            this.messageService.add({ severity: 'success', summary: '', detail: 'Activated Successfully' });
            this.getAllCompanyUsers();
          }
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'info', summary: 'Data not Activated', detail: 'Failed' });
      }
    });
  }

  routeToUrl() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.ADD_COMPANY_USERS]);
  }
  editUser(id) {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.EDIT_COMPANY_USERS], { queryParams: { id: this.utils.idEncryption(id) } });
  }
}
