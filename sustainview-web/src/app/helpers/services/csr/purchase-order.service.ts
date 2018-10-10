import { Injectable } from '@angular/core';
import { DataService } from '../core/interceptor.service';
import { UtilsService } from '../core/utils.service';
import { SUSTAIN_VIEW } from '../../../app-constants';

@Injectable()
export class PurchaseOrderService {

  constructor(private dataService: DataService, private utils: UtilsService) { }

  getPurchaseOrderList() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_PURCHASE_ORDER_LIST);
  }

  getPurchaseOrderDetailsViewList() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_PURCHASE_ORDER_DETAILS_VIEW_LIST);
  }
}
