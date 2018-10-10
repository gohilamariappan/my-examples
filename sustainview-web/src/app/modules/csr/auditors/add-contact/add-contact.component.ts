import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { UtilsService, CommunicationService } from '../../../../helpers/services';
import { AuditorService } from '../../../../helpers/services';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
  providers: [AuditorService]
})
export class AddContactComponent implements OnInit {

  constructor(private route: ActivatedRoute, private auditorService: AuditorService, public utils: UtilsService,
    private communicationService: CommunicationService, private messageService: MessageService,
    private router: Router) { }

  cols: any[];
  compName: {};
  contact: any = {};
  countryCodes: any[];
  date = new Date();
  allLocations: any[];
  baseLocations: any[];

  ngOnInit() {
    this.route.queryParams.subscribe((param: any) => {
      this.compName = param['compName'];
    });
    this.contact.companyName = this.compName;
    this.getBaseLocationsById();
    setTimeout(() => {
      this.utils.materialInput();
    }, 500);
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

  addContact() {
    this.auditorService.addContact(this.contact).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Added Successfully' });
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_CONTACTS], { queryParams: { compName: this.contact.companyName } });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Success Message', detail: 'Process Failed. Please Try Again' });
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_CONTACTS], { queryParams: { compName: this.contact.companyName } });
      }
    });
  }

  routeUrl() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_CONTACTS], { queryParams: { compName: this.contact.companyName } });
  }

}
