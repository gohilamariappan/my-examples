import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard, GlobalEventsManager } from '../../helpers/guards';
import { AddCocComponent } from './coc/add-coc/add-coc.component';
import { CocComponent } from './coc/coc.component';
import { SUSTAIN_VIEW } from '../../app-constants';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { EditCocComponent } from './coc/edit-coc/edit-coc.component';
import { AuditorsComponent } from './auditors/auditors/auditors.component';
import { AddAuditorComponent } from './auditors/add-auditor/add-auditor.component';
import { ViewAuditorComponent } from './auditors/view-auditor/view-auditor.component';
import { AuditorContactsComponent } from './auditors/auditor-contacts/auditor-contacts.component';
import { AuditorAddressComponent } from './auditors/auditor-address/auditor-address.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { AddAddressComponent } from './auditors/add-address/add-address.component';
import { ViewAddressComponent } from './auditors/view-address/view-address.component';
import { ViewContactComponent } from './auditors/view-contact/view-contact.component';
import { AddContactComponent } from './auditors/add-contact/add-contact.component';
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';
import { SupplierViewComponent } from './suppliers/supplier-view/supplier-view.component';
import { MessageService } from 'primeng/api';
import { PurchaseOrderListComponent } from './purchase/purchase-order-list/purchase-order-list.component';
import { PurchaseOrderViewComponent } from './purchase/purchase-order-view/purchase-order-view.component';
import { ListCaparComponent } from './capar/list-capar/list-capar.component';
import { ViewCaparComponent } from './capar/view-capar/view-capar.component';
import { AddCaparComponent } from './capar/add-capar/add-capar.component';
import { ListProductionFacilityComponent } from './production-facility/list-production-facility/list-production-facility.component';
import { AddProductionFacilityComponent } from './production-facility/add-production-facility/add-production-facility.component';
import { EditProductionFacilityComponent } from './production-facility/edit-production-facility/edit-production-facility.component';
import { AddProdRelComponent } from './production-facility/prod-relationship/add-prod-rel/add-prod-rel.component';
import { ListProdRelComponent } from './production-facility/prod-relationship/list-prod-rel/list-prod-rel.component';
import { EditProdRelComponent } from './production-facility/prod-relationship/edit-prod-rel/edit-prod-rel.component';
import { ViewSaveListComponent } from './savelist/view-save-list/view-save-list.component';


const indexRoutes: Routes = [
  { path: SUSTAIN_VIEW.ROUTERLINKS.COC, component: CocComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.ADD_COC, component: AddCocComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.EDIT_COC, component: EditCocComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.AUDITORS, component: AuditorsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.ADD_AUDITOR, component: AddAuditorComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.EDIT_AUDITOR, component: ViewAuditorComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_CONTACTS, component: AuditorContactsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.AUDITOR_ADDRESS, component: AuditorAddressComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.ADD_ADDRESS, component: AddAddressComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.VIEW_ADDRESS, component: ViewAddressComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.ADD_CONTACT, component: AddContactComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.VIEW_CONTACT, component: ViewContactComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.SUPPLIERS, component: SupplierListComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.SUPPLIERS_VIEW, component: SupplierViewComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  {
    path: SUSTAIN_VIEW.ROUTERLINKS.PURCHASE_ORDER_LIST, component: PurchaseOrderListComponent, pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: SUSTAIN_VIEW.ROUTERLINKS.PURCHASE_ORDER_VIEW, component: PurchaseOrderViewComponent,
    pathMatch: 'full', canActivate: [AuthGuard]
  },
  { path: SUSTAIN_VIEW.ROUTERLINKS.LIST_CAPAR, component: ListCaparComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.VIEW_CAPAR, component: ViewCaparComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.ADD_CAPAR, component: AddCaparComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  {
    path: SUSTAIN_VIEW.ROUTERLINKS.LIST_PRODUCTION_FAC, component: ListProductionFacilityComponent,
    pathMatch: 'full', canActivate: [AuthGuard]
  },
  {
    path: SUSTAIN_VIEW.ROUTERLINKS.ADD_PRODUCTION_FAC, component: AddProductionFacilityComponent,
    pathMatch: 'full', canActivate: [AuthGuard]
  },
  {
    path: SUSTAIN_VIEW.ROUTERLINKS.EDIT_PRODUCTION_FAC, component: EditProductionFacilityComponent, pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: SUSTAIN_VIEW.ROUTERLINKS.ADD_PRODUCTION_REL, component: AddProdRelComponent, pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: SUSTAIN_VIEW.ROUTERLINKS.EDIT_PRODUCTION_REL, component: EditProdRelComponent, pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: SUSTAIN_VIEW.ROUTERLINKS.LIST_PRODUCTION_REL, component: ListProdRelComponent, pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: SUSTAIN_VIEW.ROUTERLINKS.LIST_SAVED, component: ViewSaveListComponent, pathMatch: 'full',
    canActivate: [AuthGuard]
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(indexRoutes), TableModule, DropdownModule, ButtonModule,
    FormsModule,
    NguiAutoCompleteModule,
    CalendarModule,
    ConfirmDialogModule,
    MessagesModule, ToastModule
  ],
  providers: [AuthGuard, GlobalEventsManager],
  declarations: [AddCocComponent, CocComponent, EditCocComponent, AuditorsComponent, AddAuditorComponent,
    ViewAuditorComponent, AuditorContactsComponent, AuditorAddressComponent, AddAddressComponent, ViewAddressComponent,
    ViewContactComponent, AddContactComponent, SupplierListComponent, SupplierViewComponent, PurchaseOrderListComponent,
    PurchaseOrderViewComponent, ListCaparComponent, ViewCaparComponent, AddCaparComponent, ListProductionFacilityComponent,
    AddProductionFacilityComponent, EditProductionFacilityComponent, AddProdRelComponent, ListProdRelComponent, EditProdRelComponent,
     ViewSaveListComponent]

})
export class CsrModule { }
