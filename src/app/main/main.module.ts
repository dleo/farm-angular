import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './content/apps/dashboard/dashboard.module';
import { SaleItemsModule } from './content/apps/sale-items/sale-items.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main.component';
import {RouterModule} from '@angular/router';
import {routes} from './main.routes';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    SaleItemsModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [FooterComponent, NavbarComponent, MainComponent, ToolbarComponent],
  providers: []
})
export class MainModule { }
