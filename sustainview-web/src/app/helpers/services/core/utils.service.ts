import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { SUSTAIN_VIEW } from '../../../app-constants';
import * as Crypto from 'crypto-js';
import { AuthenticationService } from '..';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';
import { CookieService } from 'ngx-cookie';
import { CommunicationService } from './communication.service';
import { MessageService } from 'primeng/api';

declare var $: any;
@Injectable()
export class UtilsService {
  authToken: any = {};
  loggedInUser: any;
  numValue: number;
  key = Crypto.enc.Hex.parse('36ebe205bcdfc499a25e6923f4450fa8');
  iv = Crypto.enc.Hex.parse('be410fea41df7162a679875ec131cf2c');
  constructor(private http: Http, private router: Router, private route: ActivatedRoute,
    private _myCommunicationService: CommunicationService,
    private _cookieService: CookieService, private messageService: MessageService) { }

  isResponseSuccess(apiResponse): boolean {
    let is_success = true;
    switch (apiResponse.status) {
      case 200: if (apiResponse.message === 'Success') {
        is_success = true;
      } break;
      case 501: is_success = false;
        break;
      case 312: is_success = false;
        // const message = this.messageService.add({ severity: 'warn', summary: 'No Data', detail: 'Empty List' });
        // this._myCommunicationService.emitChange(message);
        break;
      case 401:
      case 300:
      case 301:
      case 304:
      case 320:
      case 322:
      case 311:
      case 312:
      case 400:
      case 345:
      case 348:
      case 354:
      case 355:
      case 364:
      case 365:
      case 369:
      case 370:
      case 371:
      case 372:
      case 373:
      case 374:
      case 375:
      case 376:
      case 377:
      case 378:
      case 379:
      case 380:
      case 383:
      case 384:
      case 385:
      case 386:
      case 387:
      case 389:
      case 390:
        is_success = false;
        break;
      case 306:
        is_success = false;
        break;
      case 700:
        is_success = false;
    }
    return is_success;
  }

  getAuthToken(): any {
    if (this._cookieService.get('loggedInUser') !== undefined) {
      this.authToken = this._cookieService.get('loggedInUser');
      this.authToken = JSON.parse(this.authToken);
      return this.authToken.authToken;
    }
  }
  getRequestOptions(): RequestOptions {
    const headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions: RequestOptions = new RequestOptions({ headers: headers });
    return requestOptions;
  }
  idEncryption(number) {
    this.numValue = number;
    const encrypted = Crypto.AES.encrypt(
      this.numValue.toString(),
      this.key,
      {
        iv: this.iv,
        mode: Crypto.mode.CBC,
        padding: Crypto.pad.Pkcs7
      }
    );
    return encrypted;
  }

  idDecryption(encrypted) {
    let manual_data = encrypted;
    const decrypted = Crypto.AES.decrypt(
      manual_data,
      this.key,
      {
        iv: this.iv,
        mode: Crypto.mode.CBC,
        padding: Crypto.pad.Pkcs7
      }
    );
    manual_data = decrypted.toString(Crypto.enc.Utf8);
    return manual_data;
  }


  validatorMessage(apiResponse, msg, detail): boolean {
    let is_success = true;
    switch (apiResponse.status) {
      case 200:
        if (apiResponse.message === 'Success') {
          is_success = true;
          const message = this.messageService.add({ severity: msg, summary: msg, detail: detail });
          this._myCommunicationService.emitChange(message);
        }
        break;
      // case 320:
      //   is_success = false;
      //   if (apiResponse.errorMessage == 'email already exist') {
      //     this.growlData = {
      //       severity: 'error', summary: apiResponse.errorMessage, detail: ''
      //     };
      //   } else {
      //     this.growlData = {
      //       severity: 'error', summary: apiResponse.statusMessage, detail: ''
      //     };
      //   }
      //   this._myCommunicationService.emitChange(this.growlData);
      //   break;
      // case 401:
      //   is_success = false;
      //   this.growlData = {
      //     severity: 'error', summary: apiResponse.statusMessage, detail: ''
      //   };
      //   this._myCommunicationService.emitChange(this.growlData);
      //   break;
      case 300:
      case 301:
      case 304:
      case 322:
      case 311:
      case 312:
      case 400:
      case 345:
      case 348:
      case 354:
      case 355:
      case 364:
      case 365:
      case 369:
      case 370:
      case 371:
      case 372:
      case 373:
      case 374:
      case 375:
      case 376:
      case 377:
      case 378:
      case 379:
      case 380:
      case 383:
      case 384:
      case 385:
      case 386:
      case 387:
      case 389:
      case 390:
        is_success = false;
        break;
      case 306:
        is_success = false;
        break;
      case 501: is_success = false;
        break;
    }
    return is_success;
  }
  routeToContextUrls(url) {
    switch (url) {
      case 'dashboard': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.DASHBOARD]);
        break;
    }
  }
  materialInput() {
    $('input.floating-input').each(function () {
      const $input = $(this).val();
      if ($input) {
        $(this).parent('.ngui-auto-complete-wrapper').siblings('label').css({ 'top': '-25px', 'font-size': '15px', 'color': '#0C395F' });
      } else {
        $(this).parent('.ngui-auto-complete-wrapper').siblings('label').css({
          'color': '#999', 'font-size': '17px', ' font-weight': 'normal', 'position': 'absolute',
          'pointer-events': 'none', 'left': '5px', 'top': '5px', 'transition': '0.2s ease all', '-moz-transition': '0.2s ease all',
          '-webkit-transition': '0.2s ease all'
        });
      }
    });

    $('input.floating-input').click(function () {
      $(this).parent('.ngui-auto-complete-wrapper').siblings('label').css({ 'top': '-25px', 'font-size': '15px', 'color': '#0C395F' });
    });

    $('input.floating-input').blur(function () {
      const $input = $(this).val();
      if ($input) {
        $(this).parent('.ngui-auto-complete-wrapper').siblings('label').css({ 'top': '-25px', 'font-size': '15px', 'color': '#0C395F' });
      } else {
        $(this).parent('.ngui-auto-complete-wrapper').siblings('label').css({
          'color': '#999', 'font-size': '17px', ' font-weight': 'normal', 'position': 'absolute',
          'pointer-events': 'none', 'left': '5px', 'top': '5px', 'transition': '0.2s ease all', '-moz-transition': '0.2s ease all',
          '-webkit-transition': '0.2s ease all'
        });
      }
    });

    $('input.floating-input').on('change', function () {
      const $input = $(this).val();
      if ($input) {
        $(this).parent('.ngui-auto-complete-wrapper').siblings('label').css({ 'top': '-25px', 'font-size': '15px', 'color': '#0C395F' });
      } else {
        $(this).parent('.ngui-auto-complete-wrapper').siblings('label').css({
          'color': '#999', 'font-size': '17px', ' font-weight': 'normal', 'position': 'absolute',
          'pointer-events': 'none', 'left': '5px', 'top': '5px', 'transition': '0.2s ease all', '-moz-transition': '0.2s ease all',
          '-webkit-transition': '0.2s ease all'
        });
      }
    });

    $('input.floating-input').on('keypress', function () {
      const $input = $(this).val();
      if ($input) {
        $(this).parent('.ngui-auto-complete-wrapper').siblings('label').css({ 'top': '-25px', 'font-size': '15px', 'color': '#0C395F' });
      } else {
        $(this).parent('.ngui-auto-complete-wrapper').siblings('label').css({
          'color': '#999', 'font-size': '17px', ' font-weight': 'normal', 'position': 'absolute',
          'pointer-events': 'none', 'left': '5px', 'top': '5px', 'transition': '0.2s ease all', '-moz-transition': '0.2s ease all',
          '-webkit-transition': '0.2s ease all'
        });
      }
    });
  }
}
