import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpClient } from '@angular/common/http';
import { CommunicationService } from './communication.service';
import { Observable } from 'rxjs/Observable';
import { UtilsService } from './utils.service';
import { CookieService } from 'ngx-cookie';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';

@Injectable()
export class DataService {
  authToken;
  constructor(private http: HttpClient, private _myCommunicationService: CommunicationService, private utils: UtilsService) { }

  // post method
  post(url, req) {
    this.requestCall();
    return this.http.post(url, JSON.stringify(req))
      .map((response: any) => {
        return response;
      })
      .catch((err, source) => {
        return Observable.throw(err);
      })
      .finally(() => this.responseCall());
  }

  // get method
  get(url) {
    this.requestCall();
    return this.http.get(url)
      .map((response: any) => {
        return response;
      })
      .catch((err, source) => {
        return Observable.throw(err);
      })
      .finally(() => this.responseCall());
  }


  // delete method
  delete(url, req) {
    this.requestCall();
    return this.http.put(url, JSON.stringify(req))
      .map((response: any) => {
        return response;
      }).catch((err, source) => {
        return Observable.throw(err);
      })
      .finally(() => this.responseCall());
  }

  requestCall() {
    this._myCommunicationService.loaderDataEmitChange(true);
  }
  responseCall() {
    this._myCommunicationService.loaderDataEmitChange(false);
  }
}


@Injectable()
export class InterceptorService implements HttpInterceptor {
  authStr: string;
  constructor(private _cookieService: CookieService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this._cookieService.get('loggedInUser');
    if (token !== undefined) {
      token = JSON.parse(token);
    }

    // const tkn = JSON.parse(token);
    // console.log(tkn);
    // if (this._cookieService.get('loggedInUser') !== undefined) {
    //   this.authReq = req.clone({
    //     headers: req.headers.set('Content-Type', 'application/json').set('Authorization', 'auth ${this.utils.getAuthToken()}')
    //   });
    // } else {
    //   this.authReq = req.clone({
    //     headers: req.headers.set('Content-Type', 'application/json')

    //   });
    // }
    // Clone the request to add the new header.

    // const authReq = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    let authReq;
    if (token !== undefined) {
      authReq = req.clone({
        headers: req.headers.set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .set('Authorization', token['token'])
      });
    } else {
      authReq = req.clone({
        headers: req.headers.set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
      });
    }
    // send the newly created request
    return next.handle(authReq)
      .catch((error, caught) => {
        // intercept the respons error and displace it to the console
        // console.log("Error Occurred");
        // console.log(error);
        // return the error to the method that called it
        return Observable.throw(error);
      }) as any;
  }
}
