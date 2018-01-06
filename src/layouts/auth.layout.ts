import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  templateUrl: './auth.layout.html'
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  bodyClasses = 'hold-transition lockscreen';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor() { }
  ngOnInit() {
    // add the the body classes
    this.body.classList.remove('loading');
    this.body.classList.add('hold-transition');
    this.body.classList.add('lockscreen');
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('hold-transition');
    this.body.classList.remove('lockscreen');
  }
}
