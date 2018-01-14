import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { SaleItemDetailComponent } from './sale-item-detail/sale-item-detail.component';
import { SaleItemsComponent } from './sale-items/sale-items.component';

import { PresentationService } from './services/presentation.service';
import { SaleItemService } from './services/sale-item.service';
import { VarietyService } from './services/variety.service';

import { MinimumValidatorDirective } from './directives/minimum-price.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        SaleItemsComponent,
        SaleItemDetailComponent,
        MinimumValidatorDirective
    ],
    providers: [
        SaleItemService,
        VarietyService,
        PresentationService
    ]
})
export class DashboardModule { }
