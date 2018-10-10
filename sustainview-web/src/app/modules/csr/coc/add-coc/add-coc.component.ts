import { Component, OnInit } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Coc } from '../../../../helpers/models/index';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { CocService, UtilsService, CommunicationService, CompanyAdminService } from '../../../../helpers/services';
import * as moment from 'moment';
@Component({
  selector: 'app-add-coc',
  templateUrl: './add-coc.component.html',
  styleUrls: ['./add-coc.component.scss'],
  providers: [Coc, CocService, CompanyAdminService]
})
export class AddCocComponent implements OnInit {
  value: Date;
  cocObj: any;
  certificateBody = ['1-General system and individual data type description', 'Default Coc'];
  cocSubSec = [];
  responseArray = ['Yes/No', 'text'];
  year = ['2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  cocList = [];
  cocBindObj: any;
  cocReferenceObj: any;
  constructor(public coc: Coc, private route: ActivatedRoute, private messageService: MessageService,
    private router: Router, private cocService: CocService, public utils: UtilsService, private companyAdminService: CompanyAdminService,
    private communicationService: CommunicationService) {
    this.cocObj = coc;
    setTimeout(() => {
      this.utils.materialInput();
    }, 500);
  }
  ngOnInit() {
    this.getListCoc();
  }
  addCoc() {
    this.cocObj.lastUpdatedDate = moment().format('YYYY-MM-DD');
    this.cocObj.cocType = 'company';
    this.cocObj.crossReferenceCodeNum = this.cocBindObj.cocId;
    this.cocService.addCoc(this.cocObj).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Added Successfully' });
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.COC]);
      } else {
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Operation Failed' });
      }
    });
  }
  getListCoc() {
    this.companyAdminService.getListCoc().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.cocList = result.data;
      }
    });
  }
  getSection(obj) {
    this.getCOCSubSection(obj.codeSection);
  }
  getCOCSubSection(id) {
    this.cocSubSec = [];
    this.companyAdminService.getCOCSubSection(id).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.cocSubSec = result.data;
      }
    });
  }

  routetoUrl(url) {
    switch (url) {
      case 'dashboard': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.DASHBOARD]);
        break;
      case 'coc': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.COC]);
        break;
    }
  }
}
