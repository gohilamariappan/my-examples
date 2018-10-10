import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalEventsManager, LoginGuard, AuthGuard } from '../helpers/guards/index';
import { AuthenticationService, UtilsService } from '../helpers/services';
import { SUSTAIN_VIEW } from '../app-constants';
import { ContextLoginComponent } from './context-login/context-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressbarModule } from 'ngx-bootstrap';
import { CsrModule, CompanyAdminModule } from './index';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService, DataService } from '../helpers/services/core/interceptor.service';
import { CommunicationService } from '../helpers/services';
import { CookieModule } from 'ngx-cookie';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { LoginComponent } from './login/login.component';
import { CalendarModule } from 'primeng/calendar';
const constRoutes: Routes = [
  { path: SUSTAIN_VIEW.ROUTERLINKS.CONTEXT_LOGIN, component: ContextLoginComponent, pathMatch: 'full' },
  { path: SUSTAIN_VIEW.ROUTERLINKS.LOGIN, component: LoginComponent, pathMatch: 'full' },
  { path: SUSTAIN_VIEW.ROUTERLINKS.DASHBOARD, component: DashboardComponent, pathMatch: 'full', canActivate: [LoginGuard] }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(constRoutes),
    BrowserAnimationsModule,
    CsrModule, CompanyAdminModule, HttpModule,
    HttpClientModule,
    ProgressbarModule.forRoot(),
    CookieModule.forChild(), FormsModule, MessagesModule, ToastModule,
    NguiAutoCompleteModule, CalendarModule
  ],
  declarations: [ContextLoginComponent, DashboardComponent, LoginComponent],
  providers: [CommunicationService, GlobalEventsManager, AuthenticationService, UtilsService, BaseRequestOptions, LoginGuard,
    AuthGuard,
    DataService, {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService, multi: true
    }],
  exports: [RouterModule]
})
export class MainModule { }
