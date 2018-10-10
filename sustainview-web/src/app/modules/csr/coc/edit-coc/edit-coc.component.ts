import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { CocService, UtilsService, CommunicationService } from '../../../../helpers/services';
import * as moment from 'moment';
@Component({
  selector: 'app-edit-coc',
  templateUrl: './edit-coc.component.html',
  styleUrls: ['./edit-coc.component.scss'],
  providers: [ConfirmationService, CocService]

})
export class EditCocComponent implements OnInit {
  id: any;
  cocObj = {};
  year = ['2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  certificateBody = ['1-General system and individual data type description', 'Default Coc'];
  responseArray = ['yes', 'no'];
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private route: ActivatedRoute,
    private router: Router, public utils: UtilsService, private _myCommunicationService: CommunicationService,
    private cocService: CocService, ) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe((param: any) => {
        this.id = param['id'];
      });
    this.id = this.utils.idDecryption(this.id);
    this.getCocBasedOnId(this.id);
    setTimeout(() => {
      this.utils.materialInput();
    }, 500);
  }
  getCocBasedOnId(id) {
    const obj = {
      'id': id,
      'cocType': 'Company'
    };
    this.cocService.getCocBasedOnId(obj).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.cocObj = result.data;
      }
    });
  }
  updateCoc(obj) {
    const req = {
      'id': obj.id,
      'cocId': obj.cocId,
      'codeSection': obj.codeSection,
      'codeSubSection': obj.codeSubSection,
      'codeTitle': obj.codeTitle,
      'codeText': obj.codeText,
      'crossReferenceCodeNum': obj.crossReferenceCodeNum,
      'lastUpdatedDate': moment().format('YYYY-MM-DD'),
      'responseType': obj.responseType,
      'year': obj.year
    };
    this.cocService.updateCoc(req).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Updated successfully' });
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.COC]);
      }
    });
  }
  deleteCoc() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.cocService.deleteCoc(this.id).subscribe(result => {
          if (this.utils.isResponseSuccess(result)) {
            this.messageService.add({ severity: 'success', summary: 'Delete Message', detail: 'Deleted Successfully' });
            this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.COC]);
          }
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Data not deleted', detail: 'Failed' });
      }
    });
  }

  routeToUrl(url) {
    switch (url) {
      case 'coc': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.COC]);
        break;
    }
  }
}
