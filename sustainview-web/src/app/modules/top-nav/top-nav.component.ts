import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../app-constants';
import { GlobalEventsManager } from '../../helpers/guards';
import { AuthenticationService, UtilsService, CommunicationService } from '../../helpers/services';
import { CookieService } from 'ngx-cookie';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  showNavBar = false;
  svAdminCheck = false;
  // loggedInUser: any = this.utils.getLoggedInUser();
  loggedInUser = {};
  constructor(private route: ActivatedRoute,
    private router: Router, private globalEventsManager: GlobalEventsManager,
    private authenticationService: AuthenticationService, private _cookieService: CookieService,
    private _myCommunicationService: CommunicationService, private messageService: MessageService,
    private utils: UtilsService) {
    this.globalEventsManager.showNavBarEmitter.subscribe((mode) => {
      if (mode !== null) {
        this.showNavBar = mode;
      } else if (this.loggedInUser) {
        if (this.loggedInUser) {
          this.showNavBar = true;
        } else {

        }
      }
    });
  }
  ngOnInit() {
  }
  routeToContext(url) {
    switch (url) {
      case 'coc': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.COC]);
        break;
      case 'suppliers': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.SUPPLIERS]);
        break;
      case 'auditors': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.AUDITORS]);
        break;
      case 'company': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.COMPANY]);
        break;
      case 'engagement': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.VIEW_ENGAGEMENT_RULES]);
        break;
      case 'purchase': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.PURCHASE_ORDER_LIST]);
        break;
      case 'capar': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_CAPAR]);
        break;
      case 'rag': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_RAG]);
        break;
      case 'compUser': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_COMPANY_USERS]);
        break;
      case 'prodfacility': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_PRODUCTION_FAC]);
        break;
      case 'savedList': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_SAVED]);
        break;
      // sv ADmin
      case 'compList': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LIST_COMPANY]);
        break;
    }
  }

  logout() {
    this._cookieService.remove('loggedInUser');
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.LOGIN]);
    this.messageService.add({ severity: 'success', summary: 'Logged out Successfully', detail: '' });
  }
}
