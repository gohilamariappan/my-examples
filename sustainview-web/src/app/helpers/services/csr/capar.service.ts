import { Injectable } from '@angular/core';
import { DataService } from '../core/interceptor.service';
import { UtilsService } from '../core/utils.service';
import { SUSTAIN_VIEW } from '../../../app-constants';

@Injectable()
export class CaparService {

  constructor(private dataService: DataService, private utils: UtilsService) { }

  getCaparDetails() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_CAPAR_DETAILS);
  }

  getCaparDetailsById(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_CAPAR_DETAILS_BY_ID + '?caparId=' + id);
  }

  getAuditSectionCode() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_SECTION_CODE);
  }

  getAuditSectionSubCode(secId) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_SECTION_CODE + '?section=' + secId);
  }

  getListOfAuditors() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_AUDITOR_NAMES);
  }

  getSavedList() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_SAVED_LIST);
  }

  deleteSavedList(id) {
    let savedList: any = {};
    savedList.id = id;
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.DELETE_SAVED_LIST, savedList);
 }

  // tslint:disable-next-line:eofline
}