import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ControlSidebarComponent } from './shared/control-sidebar/control-sidebar.component';
import { LeftSideComponent } from './shared/left-side/left-side.component';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

declare var AdminLTE: any;

@Component({
  templateUrl: './admin.layout.html'
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor() { }

  ngOnInit() {
    AdminLTE.init();
    // add the the body classes
    this.body.classList.remove('loading');
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }
 }
