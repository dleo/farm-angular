import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { SaleItemDetailComponent } from './sale-item-detail/sale-item-detail.component';
import { SaleItemsComponent } from './sale-items/sale-items.component';

@NgModule({
    imports: [
        SharedModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        SaleItemsComponent,
        SaleItemDetailComponent
    ],
    providers: [
        // SaleItemsService
    ]
})
export class DashboardModule { }
