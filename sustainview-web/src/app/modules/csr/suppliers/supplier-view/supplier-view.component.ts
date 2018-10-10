import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { UtilsService, CommunicationService } from '../../../../helpers/services';
import { SuppliersService } from '../../../../helpers/services';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import * as moment from 'moment';


@Component({
  selector: 'app-supplier-view',
  templateUrl: './supplier-view.component.html',
  styleUrls: ['./supplier-view.component.scss'],
  providers: [SuppliersService, ConfirmationService]
})
export class SupplierViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private suppliersService: SuppliersService, public utils: UtilsService,
    private communicationService: CommunicationService, private messageService: MessageService,
    private router: Router) { }
  cols: any[];
  id: any;
  suppliers: any = [];
  supplier: any = {};
  ngOnInit() {

    this.route
      .queryParams
      .subscribe((param: any) => {
        this.id = param['id'];
      });
    this.getSupplierList();
  }

  listOfSupplier() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.SUPPLIERS]);
  }

 getSupplierList () {
    this.suppliersService.getSupplierList().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.suppliers = result.data;
        this.suppliers.filter(item => {
          if (item.supplierId == this.id) {
            this.supplier = item;
          }});
        }
    });
  }
}


