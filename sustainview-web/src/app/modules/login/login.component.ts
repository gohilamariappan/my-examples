import { Component, OnInit } from '@angular/core';
import { GlobalEventsManager } from '../../helpers/guards';
import { AuthenticationService, UtilsService, CommunicationService } from '../../helpers/services';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../app-constants';
import { CookieService } from 'ngx-cookie';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  loggedInUserData: any = {};
  loginId: any;
  password: any;
  constructor(private globalEventsManager: GlobalEventsManager, private authenticationService: AuthenticationService,
    private _myCommunicationService: CommunicationService, private router: Router, private _cookieService: CookieService,
    private utils: UtilsService) { }
  ngOnInit() {
    this.globalEventsManager.showNavBar(false);
  }
  login() {
    const obj = {
      loginid: this.loginId,
      password: this.password,
    };
    this.authenticationService.login(obj).subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        const authToken = result.data.authentication;
        this.putCookie('loggedInUser', JSON.stringify(authToken));
        this.globalEventsManager.showNavBar(true);
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_COMPANY]);
      } else {
        this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LOGIN]);
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
