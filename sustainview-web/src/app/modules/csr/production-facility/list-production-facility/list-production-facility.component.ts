import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { UtilsService, CompanyAdminService } from '../../../../helpers/services';
import { MessageService } from 'primeng/api';
import * as _ from 'lodash';

@Component({
  selector: 'app-list-production-facility',
  templateUrl: './list-production-facility.component.html',
  styleUrls: ['./list-production-facility.component.scss'],
  providers: [CompanyAdminService]
})
export class ListProductionFacilityComponent implements OnInit {
  cols: any[];
  facilities = [];
  constructor(public utils: UtilsService, private companyAdminService: CompanyAdminService, private messageService: MessageService,
    private router: Router) { }

  ngOnInit() {
    this.cols = [
      { field: 'currentStatus', header: 'Current Status' },
      { field: 'companyName', header: 'Company Name' },
      { field: 'userDisplayName', header: 'Production Facility Id' },
      { field: 'divisionName', header: 'Production Facility' },
      { field: 'markForAudit', header: 'Mark For Audit' },
      { field: 'factoryCity', header: 'City' },
      { field: 'factoryCountry', header: 'Country' },
      { field: 'lastAuditDate', header: 'Last Audit Date' },
      { field: 'ragStatus', header: 'RAG Status' },
    ];
    this.getAllProductionFacilties();
  }
  getAllProductionFacilties() {
    this.companyAdminService.getAllProductionFacilties().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.facilities = result.data.productionfacilities;
      }
    });
  }
  routeToUrl(url) {
    switch (url) {
      case 'addProd': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.ADD_PRODUCTION_FAC]);
        break;
      case 'addRel': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.ADD_PRODUCTION_REL]);
        break;
    }
  }
  editProd(id) {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.EDIT_PRODUCTION_FAC], { queryParams: { id: this.utils.idEncryption(id) } });
  }
}
