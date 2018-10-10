import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { UtilsService, CommunicationService } from '../../../../helpers/services';
import { AuditorService } from '../../../../helpers/services';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import * as moment from 'moment';
declare var $: any;
@Component({
  selector: 'app-auditors',
  templateUrl: './auditors.component.html',
  styleUrls: ['./auditors.component.scss'],
  providers: [AuditorService, ConfirmationService]
})
export class AuditorsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private auditorService: AuditorService, public utils: UtilsService,
    private communicationService: CommunicationService, private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router) { }

  cols: any[];
  auditors: any[];
  activeFilter: any = [];
  contactPersonNameFilter = [];
  companyNameFilter: any = [];
  auditorNameFilter: any = [];
  registretionDateFilter: any = [];
  finalFilter: any = [];
  savedListObj: any = {};
  listName: any ;

  ngOnInit() {
    this.cols = [
      // { field: 'id', header: 'Id' },
      { field: 'active', header: 'Status' },
      { field: 'compnayType', header: 'Company Type' },
      { field: 'compnayName', header: 'Company Name' },
      { field: 'contactPersonName', header: 'Auditor Name' },
      { field: 'registeredOn', header: 'Registration On' },
      { field: '', header: 'Action' }
    ];
    this.getAllAuditiors();
  }

  getAllAuditiors() {
    this.auditorService.getAllAuditors().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.auditors = result.data;
        this.auditors.filter(item => {
          item.registeredOn = moment(item.registeredOn).format('YYYY-MM-DD');
        });
      }
    });
  }

  deActivate(id) {
    this.confirmationService.confirm({
      message: 'Do you want to deactivate auditor?',
      header: 'Deactivation Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.auditorService.deleteAuditor(id).subscribe(result => {
          if (this.utils.isResponseSuccess(result)) {
            this.messageService.add({ severity: 'success', summary: 'Delete Message', detail: 'Deactivated Successfully' });
            this.getAllAuditiors();
          }
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'info', summary: 'Data not Deleted', detail: 'Failed' });
      }
    });
  }

  activate(id) {
    this.confirmationService.confirm({
      message: 'Do you want to activate auditor?',
      header: 'Activation Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.auditorService.activateAuditor(id).subscribe(result => {
          if (this.utils.isResponseSuccess(result)) {
            this.messageService.add({ severity: 'success', summary: 'Delete Message', detail: 'Activated Successfully' });
            this.getAllAuditiors();
          }
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'info', summary: 'Data not Deleted', detail: 'Failed' });
      }
    });
  }

  editAuditor(id) {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.EDIT_AUDITOR], { queryParams: { id: id } });
  }

  getAddress(compName) {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_ADDRESS], { queryParams: { compName: compName } });
  }

  getContacts(compName) {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_CONTACTS], { queryParams: { compName: compName } });
  }


  routeToUrl(url) {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.ADD_AUDITOR]);
  }

  getValue(event, header) {
    switch (header) {
      case ('active'):
        this.activeFilter = [];
        this.activeFilter.push(header + ' = ' + event);
        break;
      case ('compnayName'):
        this.companyNameFilter = [];
        this.companyNameFilter.push(header + ' = ' + event);
        break;
      case ('contactPersonName'):
        this.contactPersonNameFilter = [];
        this.contactPersonNameFilter.push(header + ' = ' + event);
        break;
      case ('registeredOn'):
        this.registretionDateFilter = [];
        this.registretionDateFilter.push(header + ' = ' + event);
        break;
    }
  }


  openPopUp() {
    $ ('#newAccountModal').modal('show');
  }

  saveList() {
    this.finalFilter = [];
    if (this.activeFilter.length > 0) {
      this.finalFilter.push(this.activeFilter);
    }
    if (this.companyNameFilter.length > 0) {
      this.finalFilter.push(this.companyNameFilter);
    }
    if (this.contactPersonNameFilter.length > 0) {
      this.finalFilter.push(this.contactPersonNameFilter);
    }
    if (this.registretionDateFilter.length > 0) {
      this.finalFilter.push(this.registretionDateFilter);
    }
    this.savedListObj.query = 'FiltersApplied =';
    this.finalFilter.filter(item => {
      this.savedListObj.query = this.savedListObj.query + '#' + item;
    });
    this.savedListObj.queryTitle = this.listName;
    this.savedListObj.queryContext = 'Auditors';
    console.log('Final Values' + this.savedListObj);
    this.auditorService.savedList(this.savedListObj).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        $ ('#newAccountModal').modal('hide');
        this.messageService.add({ severity: 'success', summary: 'Delete Message', detail: 'List Saved Successfully' });
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITORS]);
      } else {
        $ ('#newAccountModal').modal('hide');
        this.messageService.add({ severity: 'success', summary: 'Delete Message', detail: 'Something Went Wrong. Please Try Again Later' });
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITORS]);
      }
    });
  }
}
