import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopNavComponent } from './modules/top-nav/top-nav.component';
import { MainModule } from '.';
import { HttpModule } from '@angular/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AuthenticationService, UtilsService, CommunicationService } from './helpers/services';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,

  ],
  imports: [
    BrowserModule,
    MainModule,
    HttpModule, ToastModule
  ],
  providers: [AuthenticationService, UtilsService, CommunicationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
