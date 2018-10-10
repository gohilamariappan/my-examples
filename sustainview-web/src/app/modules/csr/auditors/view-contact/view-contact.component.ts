import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { UtilsService, CommunicationService } from '../../../../helpers/services';
import { AuditorService } from '../../../../helpers/services';
import * as moment from 'moment';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss'],
  providers: [AuditorService, ConfirmationService],
})
export class ViewContactComponent implements OnInit {

  constructor(private route: ActivatedRoute, private auditorService: AuditorService,
    public utils: UtilsService, private confirmationService: ConfirmationService, private messageService: MessageService,
    private communicationService: CommunicationService,
    private router: Router) { }

  cols: any[];
  id: {};
  contact: any = {};
  countryCodes: any[];
  date = new Date();
  allLocations: any[];
  baseLocations: any[];

  ngOnInit() {
    this.route.queryParams.subscribe((param: any) => {
      this.id = param['id'];
    });
    this.getContactDetailsById(this.id);
    this.getBaseLocationsById();
  }

  getContactDetailsById(id) {
    this.auditorService.getContactById(id).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.contact = result.data;
      }
    });
  }


  updateContact() {
    this.auditorService.updateContactDetailsById(this.contact).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.messageService.add({ severity: 'success', summary: 'Update Message', detail: 'Updated Successfully' });
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_CONTACTS], { queryParams: { compName: this.contact.companyName } });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Update Message', detail: 'Process Failed. Please Try Again Later' });
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_CONTACTS], { queryParams: { compName: this.contact.companyName } });
      }
    });
  }

  listOfContacts() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_CONTACTS], { queryParams: { compName: this.contact.companyName } });
  }

  getBaseLocationsById() {
    this.baseLocations = [];
    this.auditorService.getBaseLocationsById().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.allLocations = result.data;
        this.allLocations.filter(item => {
          if (item.companyName === this.contact.companyName) {
            this.baseLocations.push(item.baseLocation);
          }
        });
      }
    });
  }


  deleteContact() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.auditorService.deleteContact(this.id).subscribe(result => {
          if (this.utils.isResponseSuccess(result)) {
            this.messageService.add({ severity: 'success', summary: 'Delete Message', detail: 'Delete Successfully' });
            this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_CONTACTS], { queryParams: { compName: this.contact.companyName } });
          }
        });
      }, reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Data not Deleted', detail: 'Failed' });
      }
    });

  }


}
