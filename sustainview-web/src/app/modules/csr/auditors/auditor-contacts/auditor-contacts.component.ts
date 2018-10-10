import { Component, OnInit } from '@angular/core';
import { UtilsService, CommunicationService } from '../../../../helpers/services';
import { AuditorService } from '../../../../helpers/services';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { MessageService } from 'primeng/api';
declare var $: any;

@Component({
  selector: 'app-auditor-contacts',
  templateUrl: './auditor-contacts.component.html',
  styleUrls: ['./auditor-contacts.component.scss'],
  providers: [AuditorService]
})
export class AuditorContactsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private auditorService: AuditorService, public utils: UtilsService,
    private communicationService: CommunicationService,
    private router: Router , private messageService: MessageService) { }

  cols: any[];
  contacts: any[];
  compName: any = {};
  id: any;
  companyNameFilter: any = [];
  contactPersonNameFilter = [];
  personNameFilter: any = [];
  telePhoneFilter: any = [];
  emailFilter: any = [];
  finalFilter: any = [];
  savedListObj: any = {};
  listName: any ;

  ngOnInit() {

    this.route.queryParams.subscribe((param: any) => {
      this.compName = param['compName'];
    });

    this.getAllContacts(this.compName);
    this.cols = [
      //  { field: 'id', header: 'Contact Id' },
      { field: 'companyName', header: 'Company Name' },
      { field: 'personName', header: 'Name' },
      { field: 'telePhone', header: 'Telephone' },
      { field: 'email', header: 'Email' }
    ];
  }



  getAllContacts(compName) {
    this.auditorService.getAllContacts(compName).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.contacts = result.data;
      }
    });
  }

  getValue(event, header) {
    console.log(header);
    switch (header) {
      case ('companyName'):
        this.companyNameFilter = [];
        this.companyNameFilter.push(header + ' = ' + event);
        break;
      case ('personName'):
        this.personNameFilter = [];
        this.personNameFilter.push(header + ' = ' + event);
        break;
      case ('telePhone'):
        this.telePhoneFilter = [];
        this.telePhoneFilter.push(header + ' = ' + event);
        break;
      case ('email'):
        this.emailFilter = [];
        this.emailFilter.push(header + ' = ' + event);
        break;
    }
  }

  openPopUp() {
    $ ('#newAccountModal').modal('show');
  }

  saveList() {
    this.finalFilter = [];
    if (this.personNameFilter.length > 0) {
      this.finalFilter.push(this.personNameFilter);
    }
    if (this.companyNameFilter.length > 0) {
      this.finalFilter.push(this.companyNameFilter);
    }
    if (this.telePhoneFilter.length > 0) {
      this.finalFilter.push(this.telePhoneFilter);
    }
    if (this.emailFilter.length > 0) {
      this.finalFilter.push(this.emailFilter);
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
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_CONTACTS]);
      } else {
        $ ('#newAccountModal').modal('hide');
        this.messageService.add({ severity: 'success', summary: 'Delete Message', detail: 'Something Went Wrong. Please Try Again Later' });
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_CONTACTS]);
      }
    });
  }


  addContacts() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.ADD_CONTACT], { queryParams: { compName: this.compName } });
  }

  viewContacts(id) {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.VIEW_CONTACT], { queryParams: { id: id } });
  }

  routeToUrl() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITORS]);
  }

}
