import { Component, OnInit } from '@angular/core';
import { GlobalEventsManager } from '../../helpers/guards';
import { AuthenticationService, UtilsService, CommunicationService, CocService } from '../../helpers/services';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../app-constants';
import { CookieService } from 'ngx-cookie';
import * as _ from 'lodash';
@Component({
  selector: 'app-context-login',
  templateUrl: './context-login.component.html',
  styleUrls: ['./context-login.component.scss'],
  providers: [AuthenticationService, CocService]
})
export class ContextLoginComponent implements OnInit {
  loggedInUserData: any = {};
  loginId: any;
  password: any;
  companyList = [];
  compObj: any;
  constructor(private globalEventsManager: GlobalEventsManager, private authenticationService: AuthenticationService,
    private _myCommunicationService: CommunicationService, private router: Router, private _cookieService: CookieService,
    private utils: UtilsService, private cocService: CocService, ) { }

  ngOnInit() {
    this.globalEventsManager.showNavBar(false);
    this.getCompanyList();
  }
  login(loginId, password) {
    const obj = {
      loginid: loginId,
      password: password,
      tenantid: 13
    };
    this.authenticationService.login(obj).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        const authToken = result.data.authentication;
        this.putCookie('loggedInUser', JSON.stringify(authToken));
        this.globalEventsManager.showNavBar(true);
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.DASHBOARD]);
      } else {
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.CONTEXT_LOGIN]);
      }
    });
  }
  getCompanyList() {
    this.companyList = [];
    this.cocService.getAllCompanyList().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        const compList = result.data;
        _.forEach(compList, (value, key) => {
          if (value.companyType === 'Company') {
            this.companyList.push(value);
          }
        });
      }
    });
  }
  putCookie(key: string, value: string) {
    return this._cookieService.put(key, value);
  }
  getCookie(key: string) {
    return this._cookieService.get(key);
  }
}
