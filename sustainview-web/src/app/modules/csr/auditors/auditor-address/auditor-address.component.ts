import { Component, OnInit } from '@angular/core';
import {UtilsService, CommunicationService } from '../../../../helpers/services';
import {AuditorService} from '../../../../helpers/services';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
declare var $: any;


@Component({
  selector: 'app-auditor-address',
  templateUrl: './auditor-address.component.html',
  styleUrls: ['./auditor-address.component.scss'],
  providers: [AuditorService, ConfirmationService, MessageService]
})
export class AuditorAddressComponent implements OnInit {
 constructor(private route: ActivatedRoute, private auditorService: AuditorService, public utils: UtilsService,
    private communicationService: CommunicationService,
    private router: Router , private messageService: MessageService ) { }

  cols: any[];
  cars: any[];
  compName: {};
  companyNameFilter: any = [];
  addressOneFilter: any = [];
  contactPersonNameFilter = [];
  addressTwoFilter: any = [];
  postCodeFilter: any = [];
  cityFilter: any = [];
  stateFilter = [];
  countryCodeFilter: any = [];
  faxNumberFilter: any = [];
  phoneNumberFilter: any = [];
  finalFilter: any = [];
  final: any = {};
  savedListObj: any = {};
  listName: any ;

  ngOnInit() {

    this.route.queryParams.subscribe((param: any) => {
      this.compName = param['compName'];
    });

    this.getAllAddress(this.compName);
    this.cols = [
      // { field: 'id', header: 'Id' },
      { field: 'companyName', header: 'Company Name' },
      { field: 'addressOne', header: 'Address One' },
      { field: 'addressTwo', header: 'Address Two' },
      { field: 'postCode', header: 'Post Code' },
      { field: 'city', header: 'City' },
      { field: 'state', header: 'State' },
      { field: 'countryCode', header: 'Country Code' },
      { field: 'faxNumber', header: 'Fax Number' },
      { field: 'phoneNumber', header: 'Phone Number' }
    ];

}



getAllAddress(compName) {
  this.auditorService.getAllAddress(compName).subscribe(result => {
    if (this.utils.isResponseSuccess(result)) {
     this.cars = result.data;
    }
  });
}

routeToUrl(url) {
 this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITORS]);
}

addAddress() {
  this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.ADD_ADDRESS] ,{ queryParams: { compName: this.compName }});
 }

 viewAddress(id) {
  this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.VIEW_ADDRESS], { queryParams: { id: id } });
}

listOfAuditors() {
  this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITORS]);
}

getValue(event, header) {
  switch (header) {
    case ('companyName'):
    this.companyNameFilter = [];
    this.companyNameFilter.push(header + ' = ' + event);
    break;
    case ('addressOne'):
    this.addressOneFilter = [];
    this.addressOneFilter.push(header + ' = ' + event);
    break;
    case ('addressTwo'):
      this.addressTwoFilter = [];
      this.addressTwoFilter.push(header + ' = ' + event);
      break;
    case ('postCode'):
      this.postCodeFilter = [];
      this.postCodeFilter.push(header + ' = ' + event);
      break;
      case ('city'):
      this.cityFilter = [];
      this.cityFilter.push(header + ' = ' + event);
      break;
      case ('state'):
      this.stateFilter = [];
      this.stateFilter.push(header + ' = ' + event);
      break;
      case ('countryCode'):
      this.countryCodeFilter = [];
      this.countryCodeFilter.push(header + ' = ' + event);
      break;
      case ('faxNumber'):
      this.faxNumberFilter = [];
      this.faxNumberFilter.push(header + ' = ' + event);
      break;
      case ('phoneNumberFilter'):
      this.phoneNumberFilter = [];
      this.phoneNumberFilter.push(header + ' = ' + event);
      break;
  }
}


openPopUp() {
  $ ('#newAccountModal').modal('show');
}

saveList() {
  this.finalFilter = [];
  if (this.companyNameFilter.length > 0) {
    this.finalFilter.push(this.companyNameFilter);
  }
  if (this.addressOneFilter.length > 0) {
    this.finalFilter.push(this.addressOneFilter);
  }
  if (this.contactPersonNameFilter.length > 0) {
    this.finalFilter.push(this.contactPersonNameFilter);
  }
  if (this.addressTwoFilter.length > 0) {
    this.finalFilter.push(this.addressTwoFilter);
  }
  if (this.postCodeFilter.length > 0) {
    this.finalFilter.push(this.postCodeFilter);
  }
  if (this.cityFilter.length > 0) {
    this.finalFilter.push(this.cityFilter);
  }
  if (this.stateFilter.length > 0) {
    this.finalFilter.push(this.stateFilter);
  }
  if (this.countryCodeFilter.length > 0) {
    this.finalFilter.push(this.countryCodeFilter);
  }
  if (this.faxNumberFilter.length > 0) {
    this.finalFilter.push(this.faxNumberFilter);
  }
  if (this.phoneNumberFilter.length > 0) {
    this.finalFilter.push(this.phoneNumberFilter);
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
      this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_ADDRESS]);
    } else {
      $ ('#newAccountModal').modal('hide');
      this.messageService.add({ severity: 'success', summary: 'Delete Message', detail: 'Something Went Wrong. Please Try Again Later' });
      this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_ADDRESS]);
    }
  });
}

}