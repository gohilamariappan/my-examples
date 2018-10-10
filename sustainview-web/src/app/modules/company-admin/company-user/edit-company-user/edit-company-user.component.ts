import { Component, OnInit } from '@angular/core';
import { UtilsService, CompanyAdminService, CocService } from '../../../../helpers/services';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { ConfirmationService } from 'primeng/api';
import * as _ from 'lodash';
@Component({
  selector: 'app-edit-company-user',
  templateUrl: './edit-company-user.component.html',
  styleUrls: ['./edit-company-user.component.scss'],
  providers: [CompanyAdminService, ConfirmationService]
})
export class EditCompanyUserComponent implements OnInit {
  id: any;
  userObj: any = {};
  roleList = [];
  constructor(public utils: UtilsService, private companyAdminService: CompanyAdminService, private messageService: MessageService,
    private router: Router, private route: ActivatedRoute, private confirmationService: ConfirmationService, ) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe((param: any) => {
        this.id = param['id'];
      });
    this.id = this.utils.idDecryption(this.id);
    setTimeout(() => {
      this.utils.materialInput();
    }, 500);
    this.getCompUserById();
  }
  getCompUserById() {
    this.userObj = {};
    this.companyAdminService.getCompUserById(this.id).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.userObj = result.data.users;
      }
    });
  }
  updateUser() {
    // this.addressObj.countryCode = this.countryObj.countryCodeISO2,
    this.companyAdminService.updateCompanyUsers(this.userObj).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_COMPANY_USERS]);
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Updated Successfully' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Process Failed' });
      }
    });
  }
  role() {
    this.companyAdminService.getRole().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.roleList = result.data;
      }
    });
  }
  userList() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_COMPANY_USERS]);
  }
}
