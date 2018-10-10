import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard, GlobalEventsManager } from '../../helpers/guards';
import { SUSTAIN_VIEW } from '../../app-constants';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { CalendarModule } from 'primeng/calendar';
import { CompanyComponent } from './company/company/company.component';
import { ViewEngagementRulesComponent } from './engagement-rules/view-engagement-rules/view-engagement-rules.component';
import { AdditionalAddressComponent } from './company/additional-address/add-additional-address/additional-address.component';
import { ListAdditionalAddressComponent } from './company/additional-address/list-additional-address/list-additional-address.component';
import { EditAdditionalAddressComponent } from './company/additional-address/edit-additional-address/edit-additional-address.component';
import { AdditionalContactComponent } from './company/additional-contact/add-contact/additional-contact.component';
import { EditCompanyContactComponent } from './company/additional-contact/edit-company-contact/edit-company-contact.component';
import { ListCompanyContactComponent } from './company/additional-contact/list-company-contact/list-company-contact.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ListRagComponent } from './rag-parameters/list-rag/list-rag.component';
import { EditRagComponent } from './rag-parameters/edit-rag/edit-rag.component';
import { AddRagComponent } from './rag-parameters/add-rag/add-rag.component';
import { ListCompanyUserComponent } from './company-user/list-company-user/list-company-user.component';
import { AddCompanyUserComponent } from './company-user/add-company-user/add-company-user.component';
import { EditCompanyUserComponent } from './company-user/edit-company-user/edit-company-user.component';
import { SvCompanyListComponent } from './company/sv-company-list/sv-company-list.component';

const indexRoutes: Routes = [
  { path: SUSTAIN_VIEW.ROUTERLINKS.COMPANY, component: CompanyComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  {
    path: SUSTAIN_VIEW.ROUTERLINKS.VIEW_ENGAGEMENT_RULES, component: ViewEngagementRulesComponent, pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: SUSTAIN_VIEW.ROUTERLINKS.ADD_COMPANY_ADDITIONAL_ADDRESS, component: AdditionalAddressComponent, pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: SUSTAIN_VIEW.ROUTERLINKS.GET_ALL_COMPANY_ADDITIONAL_ADDRESS, component: ListAdditionalAddressComponent, pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: SUSTAIN_VIEW.ROUTERLINKS.EDIT_COMPANY_ADDITIONAL_ADDRESS, component: EditAdditionalAddressComponent, pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: SUSTAIN_VIEW.ROUTERLINKS.LIST_COMPANY_CONTACT, component: ListCompanyContactComponent, pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: SUSTAIN_VIEW.ROUTERLINKS.ADD_COMPANY_CONTACT, component: AdditionalContactComponent, pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: SUSTAIN_VIEW.ROUTERLINKS.EDIT_COMPANY_CONTACT, component: EditCompanyContactComponent, pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  { path: SUSTAIN_VIEW.ROUTERLINKS.LIST_RAG, component: ListRagComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.ADD_RAG, component: AddRagComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.EDIT_RAG, component: EditRagComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.ADD_COMPANY_USERS, component: AddCompanyUserComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.LIST_COMPANY_USERS, component: ListCompanyUserComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.EDIT_COMPANY_USERS, component: EditCompanyUserComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: SUSTAIN_VIEW.ROUTERLINKS.LIST_COMPANY, component: SvCompanyListComponent, pathMatch: 'full', canActivate: [AuthGuard] },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(indexRoutes),
    FormsModule, NguiAutoCompleteModule, CalendarModule, TableModule, ToastModule, ConfirmDialogModule,
  ],
  declarations: [CompanyComponent, ViewEngagementRulesComponent, AdditionalAddressComponent, AdditionalContactComponent,
    ListAdditionalAddressComponent, EditAdditionalAddressComponent, EditCompanyContactComponent, ListCompanyContactComponent,
    ListRagComponent, EditRagComponent, AddRagComponent, ListCompanyUserComponent, AddCompanyUserComponent,
    EditCompanyUserComponent, SvCompanyListComponent],
  providers: [AuthGuard, GlobalEventsManager],
})
export class CompanyAdminModule { }
