import { Injectable } from '@angular/core';
import { DataService } from '../core/interceptor.service';
import { UtilsService } from '../core/utils.service';
import { SUSTAIN_VIEW } from '../../../app-constants';

@Injectable()
export class SuppliersService {

  constructor(private dataService: DataService, private utils: UtilsService) { }

   getSupplierList() {
    return this.dataService.get(SUSTAIN_VIEW.BASE  + SUSTAIN_VIEW.APIS.GET_SUPPLIER);
   }

   deleteSupplierList(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE  + SUSTAIN_VIEW.APIS.DELETE_SUPPLIER + '?id=' + id);
   }
   activateSupplierList(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE  + SUSTAIN_VIEW.APIS.ACTIVATE_SUPPLIER + '?id=' + id);
   }
   savedList(obj) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.ADD_SAVED_LIST, obj);
  }
}
