import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

import * as $ from "jquery";
import 'jquery-ui-dist/jquery-ui';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private jqLoadComplete = new BehaviorSubject<any>(null);
  jqLoadComplete$ = this.jqLoadComplete.asObservable();

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    (<any>window).$ = $ ;
    console.log('AppService setting window jquery ',(<any>window).$);
    // let complete = function() {
    //
    // }
    (<any>$(document)).ready(this.setLoadComplete.bind(this));
    //   function () {
    //   console.log('document ready!')
    //   // $('btn').click(function () {
    //   //    alert('I am clicked !')
    //   // });
    //   this.jqLoadComplete.next(new Date());
    // });
  }

  setLoadComplete() {
    console.log('document ready!')
    this.jqLoadComplete.next(new Date());
  }
}
