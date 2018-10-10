import { Component, OnInit } from '@angular/core';
import { UtilsService, CompanyAdminService } from '../../../../helpers/services';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
@Component({
  selector: 'app-add-company-user',
  templateUrl: './add-company-user.component.html',
  styleUrls: ['./add-company-user.component.scss'],
  providers: [CompanyAdminService]
})
export class AddCompanyUserComponent implements OnInit {
  user: any = {};
  roleList = [];
  constructor(public utils: UtilsService, private companyAdminService: CompanyAdminService, private messageService: MessageService,
    private router: Router) { }

  ngOnInit() {
    this.role();
    setTimeout(() => {
      this.utils.materialInput();
    }, 500);
  }
  role() {
    this.companyAdminService.getRole().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.roleList = result.data;
      }
    });
  }
  addUser() {
    this.user.roleName = this.user.roleName.roleName;
    this.companyAdminService.addUser(this.user).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Added successfully' });
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_COMPANY_USERS]);
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Process Failed' });
      }
    });
  }
  userList() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_COMPANY_USERS]);
  }
}
