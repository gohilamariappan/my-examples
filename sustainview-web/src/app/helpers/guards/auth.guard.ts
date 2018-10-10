import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private _cookieService: CookieService, ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this._cookieService.get('loggedInUser') !== undefined) {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page with the return url , { queryParams: { returnUrl: state.url }}
    this.router.navigate(['/context-login']);
    return false;
  }
}
