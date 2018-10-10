import { Injectable } from '@angular/core';
import { DataService } from '../core/interceptor.service';
import { UtilsService } from '../core/utils.service';
import { SUSTAIN_VIEW } from '../../../app-constants';
@Injectable()
export class CocService {

  constructor(private dataService: DataService, private utils: UtilsService) { }
  getAllCoc() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_ALL_COC);
  }
  addCoc(obj) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.ADD_COC, obj);
  }
  getCocBasedOnId(obj) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_COC_BASED_ID + '?id='
      + obj.id + '&cocType=' + obj.cocType);
  }
  deleteCoc(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.DELETE_COC + '?id=' + id);
  }
  login(loginid, password) {
    const obj = {
      loginid: loginid,
      password: password,
    };
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.LOGIN, obj);
  }
  updateCoc(obj) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.UPDATE_COC, obj);

  }
  getAllCompanyList() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.COMPANY_LIST);
  }
}
