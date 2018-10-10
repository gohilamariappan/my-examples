import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class CommunicationService {

  constructor() { }
  private emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();
  private loaderData = new Subject<any>();
  loaderDataChangeEmitted$ = this.loaderData.asObservable();
  private loggedInDataSource = new Subject<any>();
  loggedInDataChangeEmitted$ = this.loggedInDataSource.asObservable();
  // service message
  emitChange(myMessage: any) {
    this.emitChangeSource.next(myMessage);
  }
  // request and response call emitter
  loaderDataEmitChange(myMessage: any) {
     this.loaderData.next(myMessage);
  }

  // Service message
  loggedInDataemitChange(myMessage: any) {
    this.loggedInDataSource.next(myMessage);
  }
}
