import { Injectable } from '@angular/core';
import { SUSTAIN_VIEW } from '../../../app-constants';
import { DataService } from './interceptor.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  constructor(private dataService: DataService) { }
  login(obj) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.LOGIN, obj);
  }

  // logout() {
  //   if (this._cookieService.get('loggedInUser') !== undefined) {
  //     this.sessionId = this._cookieService.get('loggedInUser');
  //     if (this.sessionId) {
  //       // return this.http.post(KRONOS.BASE + KRONOS.USER + KRONOS.APIS.LOGOUT, JSON.stringify({ sessionId: this.sessionId }))
  //       //     .map((response: any) => {
  //       //         let resp = response;
  //       //         if (resp.statusCode == 200 && resp.statusMessage == "Success") {
  //       //             this._cookieService.remove('loggedInUser');
  //       //             return resp;
  //       //         }
  //       //     })
  //       let req = {
  //         sessionId: this.sessionId
  //       }
  //       return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.CORE + SUSTAIN_VIEW.APIS.LOGOUT, req);
  //     }
  //   }
  // }
}

