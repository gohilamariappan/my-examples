import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { UtilsService, CommunicationService } from '../../../../helpers/services';
import { PurchaseOrderService } from '../../../../helpers/services';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import * as moment from 'moment';

@Component({
  selector: 'app-purchase-order-view',
  templateUrl: './purchase-order-view.component.html',
  styleUrls: ['./purchase-order-view.component.scss'],
  providers: [PurchaseOrderService, ConfirmationService]
})
export class PurchaseOrderViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private purchaseService: PurchaseOrderService, public utils: UtilsService,
    private communicationService: CommunicationService, private messageService: MessageService,
    private router: Router) { }
    purchaseOrders: any[];
    cols: any[];

      ngOnInit() {
        this.getPurchaseOrderDetailView();
        this.cols = [
          { field: 'batchId', header: 'BatchId' },
          { field: 'companyId', header: 'Company' },
          { field: 'divisionHierarchy1', header: 'Brand' },
          { field: 'divisionHierarchy2', header: 'Product Division' },
          { field: 'seasonHierarchy1', header: 'Main Season' },
          { field: 'seasonHierarchy2', header: 'Collection' },
          { field: 'productHierarchy1', header: 'Product Group' },
          { field: 'productHierarchy2', header: 'Fabric Group' },
          { field: 'productHierarchy3', header: 'Production Group' },
          { field: 'productHierarchy4', header: 'Design Group' },
          { field: 'productHierarchy5', header: 'Composition' },
          { field: 'itemId', header: 'Item nr' },
          { field: 'itemDescription', header: 'Item Description' },
          { field: 'itemVariantId', header: 'Color id' },
          { field: 'itemvariantDescription', header: 'Color description' },
          { field: 'purchaseOrderNumber', header: 'Bulk PO nr' },
          { field: 'poType', header: 'Po Type' },
          { field: 'purchaseOrderDate', header: 'Purchase Order Date' },
          { field: 'buyFromVendorCode', header: 'Buy-from supplier code' },
          { field: 'payToVendorCode', header: 'Pay-to supplier Code' },
          { field: 'purchasingAgent', header: 'Agent' },
          { field: 'leadPlantId', header: 'Production Facility Id' },
          { field: 'countryOfOriginCode', header: 'COO' },
          { field: 'paymentTermsCode', header: 'Payment Term' },
          { field: 'shipModeCode', header: 'Shipmode' },
          { field: 'confirmedDateExOrigin', header: 'Confirmed date ex-origin' },
          { field: 'expectedDateOfArrival', header: 'ETA' },
          { field: 'deadLineDate', header: 'Deadline ETA' },
          { field: 'shipToCountry', header: 'Ship-to Country' },
          { field: 'purchaseUomCode', header: 'Purchase UOM' },
          { field: 'orderedUnits', header: 'Ordered qty' },
          { field: 'receivedUnitsGross', header: 'Received qty Gross' },
          { field: 'purchaseCurrencyCode', header: 'Currency' },
          { field: 'purchaseAmntLclCurncy', header: 'PO Amount local currency' },
          { field: 'purchaseAmntCentralCurrency', header: 'PO Amount Central Currency' },
          { field: '', header: 'Action' }
        ];
    }


  getPurchaseOrderDetailView() {
    this.purchaseService.getPurchaseOrderDetailsViewList().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.purchaseOrders = result.data;
        this.purchaseOrders.filter(item => {
          item.purchaseOrderDate = moment(item.purchaseOrderDate).format('YYYY-MM-DD');
          item.confirmedDateExOrigin = moment(item.confirmedDateExOrigin).format('YYYY-MM-DD');
          item.expectedDateOfArrival = moment(item.expectedDateOfArrival).format('YYYY-MM-DD');
          item.deadLineDate = moment(item.deadLineDate).format('YYYY-MM-DD');
        });
      }
    });
   }

   purchaseOrderList() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.PURCHASE_ORDER_LIST]);
   }
}
