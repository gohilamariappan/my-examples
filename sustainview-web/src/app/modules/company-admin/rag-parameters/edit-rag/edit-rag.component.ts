import { Component, OnInit } from '@angular/core';
import { UtilsService, CompanyAdminService, CocService } from '../../../../helpers/services';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { ConfirmationService } from 'primeng/api';
import * as _ from 'lodash';
@Component({
  selector: 'app-edit-rag',
  templateUrl: './edit-rag.component.html',
  styleUrls: ['./edit-rag.component.scss'],
  providers: [CompanyAdminService, ConfirmationService]
})
export class EditRagComponent implements OnInit {
  id: any;
  rag: any = {};
  cocObj: any = {};
  cocArray = [];
  ragArray = [{ name: 'Red' }, { name: 'Amber' }, { name: 'Green' }];
  statusArray = [{ id: 1, name: 'Yes', value: 'Y' }, { id: 2, name: 'No', value: 'N' }];
  issueStatus: any = {};
  caparStatus: any = {};
  ragNcs: any = {};
  ragAOI: any = {};
  notAudited: any = {};
  auditOutdated: any = {};
  constructor(public utils: UtilsService, private companyAdminService: CompanyAdminService, private messageService: MessageService,
    private router: Router, private route: ActivatedRoute, private confirmationService: ConfirmationService, ) { }
  ngOnInit() {
    this.ragAOI = {}, this.ragNcs = {};
    this.route
      .queryParams
      .subscribe((param: any) => {
        this.id = param['id'];
      });
    this.id = this.utils.idDecryption(this.id);
    this.getRagId(this.id);
    this.getCocSubSecRef();
    setTimeout(() => {
      this.utils.materialInput();
    }, 500);
  }
  getRagId(id) {
    this.ragNcs = {}, this.ragAOI = {}; this.issueStatus = {}; this.caparStatus = {};
    this.notAudited = {}; this.auditOutdated = {};
    this.companyAdminService.getRag(id).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.rag = result.data.ragparam;
        _.forEach(this.statusArray, (value, key) => {
          if (value.id === this.rag.minimumCapForDeterminingRag) {
            this.issueStatus = value;
          }
          if (value.value === this.rag.caparFromOutdatedAuditsToBeCosideredForCap) {
            this.caparStatus = value;
          }
        });
        _.forEach(this.ragArray, (value, key) => {
          if (value.name === this.rag.defaultRagWhenThereAreNcs) {
            this.ragNcs = value;
          }
        });
        _.forEach(this.ragArray, (value, key) => {
          if (value.name === this.rag.defaultRagWhenNotAuditedYet) {
            this.notAudited = value;
          }
        });
        _.forEach(this.ragArray, (value, key) => {
          if (value.name === this.rag.defaultRagWhenAuditIsOutdated) {
            this.auditOutdated = value;
          }
        });
        _.forEach(this.ragArray, (value, key) => {
          if (this.rag.defaultRagWhenThereAreAoi === value.name) {
            this.ragAOI = value;
          }
        });
      }
    });
  }
  getCocSubSecRef() {
    this.cocArray = [];
    this.companyAdminService.getCocSubSecRef().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.cocArray = result.data;
      }
    });
  }
  updateRag() {
    const obj = {
      'id': this.id,
      'cocId': this.cocObj.name,
      'defaultRagWhenNotAuditedYet': this.notAudited.name,
      'defaultRagWhenAuditIsOutdated': this.auditOutdated.name,
      'caparFromOutdatedAuditsToBeCosideredForCap': this.caparStatus.value,
      'minimumCapForDeterminingRag': this.issueStatus.id,
      'defaultRagWhenThereAreNcs': this.ragNcs.name,
      'defaultRagWhenThereAreAoi': this.ragAOI.name,
      'numberOfNcsAllowedAtDefaultRagStatus': this.rag.numberOfNcsAllowedAtDefaultRagStatus,
      'numberOfAoiAllowedAtDefaultRagStatus': this.rag.numberOfAoiAllowedAtDefaultRagStatus
    };
    this.companyAdminService.editRag(obj).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Updated successfully' });
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_RAG]);
      } else if (result.status === 417) {
        this.messageService.add({ severity: 'warn', summary: '', detail: 'Already Exists' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Process Failed' });
      }
    });
  }
  deleteRag() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.companyAdminService.deleteRag(this.id).subscribe(result => {
          if (this.utils.isResponseSuccess(result)) {
            this.messageService.add({ severity: 'success', summary: 'Delete Message', detail: 'Deleted Successfully' });
            this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_RAG]);
          }
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Data not deleted', detail: '' });
      }
    });
  }
  ragList() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_RAG]);
  }
}
