import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { UtilsService, CommunicationService } from '../../../../helpers/services';
import { AuditorService } from '../../../../helpers/services';
import * as moment from 'moment';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CaparService } from '../../../../helpers/services';

@Component({
  selector: 'app-view-save-list',
  templateUrl: './view-save-list.component.html',
  styleUrls: ['./view-save-list.component.scss'],
  providers: [ConfirmationService, CaparService],
})
export class ViewSaveListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private caparService: CaparService, public utils: UtilsService,
    private confirmationService: ConfirmationService, private messageService: MessageService,
    private communicationService: CommunicationService,
    private router: Router) { }
  savedlists: any[];
  cols: any[];

  ngOnInit() {
    this.getSavedList();
    this.cols = [
      { field: 'id', header: 'Serial' },
      { field: 'queryContext', header: 'Reference List' },
      { field: 'queryTitle', header: 'Saved List' },
      { field: '', header: 'Action' },
    ];
  }

  getSavedList() {
    this.caparService.getSavedList().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        if (result.status === 312) {
        }
        this.savedlists = result.data;
      }
    });
  }

  onClickNavigate(pageId) {
    switch (pageId) {
      case ('Code Of Conduct' || 'coclist.html'):
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.COC]);
        break;

     case ('coclist.html'):
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.COC]);
        break;

     case ('Users'):
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_COMPANY_USERS]);
        break;

      case ('Production Facilities'):
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_PRODUCTION_FAC]);
        break;

      case ('Rag Parameters'):
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_RAG]);
        break;

      case ('Suppliers'):
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.SUPPLIERS]);
        break;

      case ('Purchase Order Overview'):
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.PURCHASE_ORDER_LIST]);
        break;

      case ('CAPAR Overview'):
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_CAPAR]);
        break;

      case ('Auditors'):
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITORS]);
        break;

      case ('AuditLogs'):
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS]);
        break;

      case ('Additional Addresses'):
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_ADDRESS]);
        break;

      case ('Additional Contacts'):
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_CONTACTS]);
        break;
      default :
      this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_SAVED]);
    }

 }

 deActivate(id)  {
 this.confirmationService.confirm({
  message: 'Do you want to Delete Saved List?',
  header: 'Deactivation Confirmation',
  icon: 'pi pi-info-circle',
  accept: () => {
    this.caparService.deleteSavedList(id).subscribe(result => {
      if (result.status === 200) {
        this.messageService.add({ severity: 'success', summary: 'Data not Deleted', detail: 'Saved List Deleted Succesfully' });
        this.getSavedList();
      } else {
        this.messageService.add({ severity: 'error', summary: 'Data not Deleted', detail: 'Something Went Wrong Please Try Again' });
        this.getSavedList();
      }
    });
  },
  reject: () => {
    this.messageService.add({ severity: 'info', summary: 'Data not Deleted', detail: 'Failed' });
  }
});
 }
 // tslint:disable-next-line:eofline
 }