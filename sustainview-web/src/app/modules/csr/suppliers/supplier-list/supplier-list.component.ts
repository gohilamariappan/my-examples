import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { UtilsService, CommunicationService } from '../../../../helpers/services';
import { SuppliersService } from '../../../../helpers/services';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
declare var $: any;
@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss'],
  providers: [SuppliersService, ConfirmationService]
})
export class SupplierListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private suppliersService: SuppliersService, public utils: UtilsService,
    private communicationService: CommunicationService, private messageService: MessageService,
    private confirmationService: ConfirmationService, private router: Router) { }

  cols: any[];
  suppliers: any[];

  activeFilter: any = [];
  companyNameFilter: any = [];
  supplierNameFilter: any = [];
  supplierAddressFilter: any = [];
  supplierCity: any = [];
  supplierCountry: any = [];
  supplierPhone: any = [];
  finalFilter: any = [];
  savedListObj: any = {};
  listName: any ;

  ngOnInit() {
    this.getSupplierList();
    this.cols = [
      // { field: 'supplierId', header: 'Supplier Id' },
      { field: 'currentStatus', header: 'Current Status' },
      { field: 'companyName', header: 'Company Name' },
      { field: 'supplierName', header: 'Supplier Name' },
      { field: 'supplierAddress', header: 'Supplier Address' },
      { field: 'supplierCity', header: 'Supplier City' },
      { field: 'supplierCountry', header: 'Supplier Country' },
      { field: 'supplierPhone', header: 'Supplier Phone' },
      { field: '', header: 'Action' }
    ];
  }



  getValue(event, header) {
    switch (header) {
      case ('currentStatus'):
        this.activeFilter = [];
        this.activeFilter.push(header + ' = ' + event);
        break;
      case ('compnayName'):
        this.companyNameFilter = [];
        this.companyNameFilter.push(header + ' = ' + event);
        break;
      case ('supplierName'):
        this.supplierNameFilter = [];
        this.supplierNameFilter.push(header + ' = ' + event);
        break;
      case ('supplierAddress'):
        this.supplierAddressFilter = [];
        this.supplierAddressFilter.push(header + ' = ' + event);
        break;
      case ('supplierCity'):
        this.supplierCity = [];
        this.supplierCity.push(header + ' = ' + event);
        break;
      case ('supplierCountry'):
        this.supplierCountry = [];
        this.supplierCountry.push(header + ' = ' + event);
        break;
      case ('supplierPhone'):
        this.supplierPhone = [];
        this.supplierPhone.push(header + ' = ' + event);
        break;
    }
  }


  openPopUp() {
    $ ('#newAccountModal').modal('show');
  }

  saveList() {
    this.finalFilter = [];
    if (this.activeFilter.length > 0) {
      this.finalFilter.push(this.activeFilter);
    }
    if (this.companyNameFilter.length > 0) {
      this.finalFilter.push(this.companyNameFilter);
    }
    if (this.companyNameFilter.length > 0) {
      this.finalFilter.push(this.companyNameFilter);
    }
    if (this.supplierNameFilter.length > 0) {
      this.finalFilter.push(this.supplierNameFilter);
    }

    if (this.supplierAddressFilter.length > 0) {
      this.finalFilter.push(this.supplierAddressFilter);
    }
    if (this.supplierCity.length > 0) {
      this.finalFilter.push(this.supplierCity);
    }

    if (this.supplierCountry.length > 0) {
      this.finalFilter.push(this.supplierCountry);
    }
    if (this.supplierPhone.length > 0) {
      this.finalFilter.push(this.supplierPhone);
    }

    this.savedListObj.query = 'FiltersApplied =';
    this.finalFilter.filter(item => {
      this.savedListObj.query = this.savedListObj.query + '#' + item;
    });
    this.savedListObj.queryTitle = this.listName;
    this.savedListObj.queryContext = 'Auditors';
    console.log('Final Values' + this.savedListObj);
    this.suppliersService.savedList(this.savedListObj).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        $ ('#newAccountModal').modal('hide');
        this.messageService.add({ severity: 'success', summary: 'Delete Message', detail: 'List Saved Successfully' });
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.SUPPLIERS]);
      } else {
        $ ('#newAccountModal').modal('hide');
        this.messageService.add({ severity: 'success', summary: 'Delete Message', detail: 'Something Went Wrong. Please Try Again Later' });
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.SUPPLIERS]);
      }
    });
  }

  getSupplierList() {
    this.suppliersService.getSupplierList().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        console.log(JSON.stringify(result));
        this.suppliers = result.data;
        this.suppliers.sort(function (a, b) {
          return b.supplierId - a.supplierId;
        });
      }
    });
  }

  viewSuppliers(id) {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.SUPPLIERS_VIEW], { queryParams: { id: id } });
  }

  deleteSupplier(id) {
    this.confirmationService.confirm({
      message: 'Do you want to deactivate supplier?',
      header: 'Deactivate Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.suppliersService.deleteSupplierList(id).subscribe(result => {
          if (this.utils.isResponseSuccess(result)) {
            this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'DeActivated successfully' });
            this.getSupplierList();
          } else {
            this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Process Failed Plz Try Again' });
            this.getSupplierList();
          }
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'info', summary: 'Data not Deleted', detail: 'Failed' });
      }
    });
  }


  activateSupplier(id) {
    this.confirmationService.confirm({
      message: 'Do you want to activate supplier?',
      header: 'Activate Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.suppliersService.activateSupplierList(id).subscribe(result => {
          if (this.utils.isResponseSuccess(result)) {
            this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Activated successfully' });
            this.getSupplierList();
          } else {
            this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Process Failed Plz Try Again' });
            this.getSupplierList();
          }
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'info', summary: 'Data not Deleted', detail: 'Failed' });
      }
    });
  }
}
