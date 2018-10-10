import { Component, OnInit } from '@angular/core';
import { UtilsService, CompanyAdminService } from '../../../../helpers/services';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
@Component({
  selector: 'app-add-rag',
  templateUrl: './add-rag.component.html',
  styleUrls: ['./add-rag.component.scss'],
  providers: [CompanyAdminService]
})
export class AddRagComponent implements OnInit {
  rag: any = {};
  cocArray = [];
  cocObj: any;
  ragArray = [{ name: 'Red' }, { name: 'Amber' }, { name: 'Green' }];
  statusArray = [{ id: 1, name: 'Yes', value: 'Y' }, { id: 2, name: 'No', value: 'N' }];
  constructor(public utils: UtilsService, private companyAdminService: CompanyAdminService, private messageService: MessageService,
    private router: Router) { }

  ngOnInit() {
    this.getCocSubSecRef();
    setTimeout(() => {
      this.utils.materialInput();
    }, 500);
  }
  ragList() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_RAG]);
  }
  addRag() {
    // console.log(this.rag);
    const obj = {
      'cocId': this.cocObj.name,
      'defaultRagWhenNotAuditedYet': this.rag.defaultRagWhenNotAuditedYet.name,
      'defaultRagWhenAuditIsOutdated': this.rag.defaultRagWhenAuditIsOutdated.name,
      'caparFromOutdatedAuditsToBeCosideredForCap': this.rag.caparStatus.value,
      'minimumCapForDeterminingRag': this.rag.issues.id,
      'defaultRagWhenThereAreNcs': this.rag.defaultRagWhenThereAreNcs.name,
      'defaultRagWhenThereAreAoi': this.rag.defaultRagWhenThereAreAoi.name,
      'numberOfNcsAllowedAtDefaultRagStatus': this.rag.ncStatus,
      'numberOfAoiAllowedAtDefaultRagStatus': this.rag.aoiStatus
    };
    this.companyAdminService.addRag(obj).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Added successfully' });
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_RAG]);
      } else if (result.status === 417) {
        this.messageService.add({ severity: 'warn', summary: '', detail: 'Already Exists' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Process Failed' });
      }
    });
  }
  getCocSubSecRef() {
    this.companyAdminService.getCocSubSecRef().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.cocArray = result.data;
      }
    });
  }
}
