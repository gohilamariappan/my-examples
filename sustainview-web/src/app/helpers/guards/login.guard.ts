import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie';
@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private _cookieService: CookieService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._cookieService.get('loggedInUser') === undefined) {
      // logged in so return false
      return false;
    }
    return true;
  }
}
