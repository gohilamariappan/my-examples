import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { UtilsService, CompanyAdminService } from '../../../../helpers/services';
import { MessageService } from 'primeng/api';
import * as _ from 'lodash';
@Component({
  selector: 'app-sv-company-list',
  templateUrl: './sv-company-list.component.html',
  styleUrls: ['./sv-company-list.component.scss'],
  providers: [CompanyAdminService]
})
export class SvCompanyListComponent implements OnInit {
  compList = [];
  cols: any[];
  constructor(public utils: UtilsService, private companyAdminService: CompanyAdminService, private messageService: MessageService,
    private router: Router) { }

  ngOnInit() {
    this.cols = [
      { field: 'status', header: 'Status' },
      { field: 'loginid', header: 'Company Type' },
      { field: 'userDisplayName', header: 'Company Name' },
      { field: 'profile', header: 'Registered Date' },
    ];
    this.getCompList();
  }
  getCompList() {
    this.companyAdminService.getAllCompanyList().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.compList = result.data.company;
        _.forEach(this.compList, (value, key) => {
          if (value.active === 'Y') {
            this.compList[key].status = 'active';
          } else if (value.active === 'N') {
            this.compList[key].status = 'inactive';
          }
        });
      }
    });
  }
  editComp(id) {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.COMPANY], { queryParams: { id: this.utils.idEncryption(id) } });
  }
  routeToUrl(){
    
  }
}
