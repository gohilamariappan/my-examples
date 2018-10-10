import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { UtilsService, CommunicationService } from '../../../../helpers/services';
import { PurchaseOrderService } from '../../../../helpers/services';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import * as moment from 'moment';


@Component({
  selector: 'app-purchase-order-list',
  templateUrl: './purchase-order-list.component.html',
  styleUrls: ['./purchase-order-list.component.scss'],
  providers: [PurchaseOrderService, ConfirmationService]
})
export class PurchaseOrderListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private purchaseService: PurchaseOrderService, public utils: UtilsService,
    private communicationService: CommunicationService, private messageService: MessageService,
    private router: Router) { }
    cols: any[];
    purchaseOrders: any[];
    sumPoAmt: any = 0;
    sumPoAmtCntrl: any = 0;
    sumPoQunty: any = 0;
    sumItemId: any = 0;
    item: any = {};

    ngOnInit() {
      this.getPurchaseOrderList();
      this.cols = [
        { field: 'purchaseOrderNumber', header: 'PO Number' },
        { field: 'purchaseOrderDate', header: 'PO Date' },
        { field: 'leadPlantId', header: 'Production Facility Id' },
        { field: 'markForAudit', header: 'Mark For Audit' },
        { field: 'purchasingAgent', header: 'Purchasing Agent' },
        { field: 'countryOfOriginCode', header: 'Country of Origin' },
        { field: 'payToVendorName', header: 'Vendor' },
        { field: 'factoryName', header: 'Production Facility' },
        { field: 'divisionName', header: 'Division' },
        { field: 'ragStatus', header: 'RAG Status' },
        { field: 'lastAuditDate', header: 'Last Audited Date' },
        { field: 'auditDueDate', header: 'Next Audit Date' },
        { field: 'scheduleAuditDate', header: 'Next Scheduled Audit' },
        { field: 'openNcs', header: '# of Non Compliances' },
        { field: 'outStandingNcs', header: '# of Non Compliances Past Due' },
        { field: 'sumPurchaseAmountLocalCurrency', header: 'PO Amt' },
        { field: 'sumPurchaseAmountCentralCurrency', header: 'PO Amt Curr' },
        { field: 'sumOrderedUnits', header: 'PO Qty' },
        { field: 'countItemId', header: '# of Styles' }
      ];
   }

   getPurchaseOrderList() {
    this.purchaseService.getPurchaseOrderList().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.purchaseOrders = result.data;
        this.purchaseOrders.filter(item => {
          item.purchaseOrderDate = moment(item.purchaseOrderDate).format('YYYY-MM-DD');
        });
        if ( this.purchaseOrders.length  > 0) {
          this.item = this.purchaseOrders[this.purchaseOrders.length - 1];
          this.sumPoAmt = this.item.sumPurchaseAmountLocalCurrency;
          this.sumPoAmtCntrl = this.item.sumPurchaseAmountCentralCurrency;
          this.sumPoQunty = this.item.sumOrderedUnits;
          this.sumItemId = this.item.countItemId;
        }
       this.purchaseOrders.pop();
       this.purchaseOrders.sort(function (a, b) {
        return b.purchaseOrderNumber - a.purchaseOrderNumber;
      });
      }
    });
   }

   viewPurchaseOrder() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.PURCHASE_ORDER_VIEW]);
   }
}
