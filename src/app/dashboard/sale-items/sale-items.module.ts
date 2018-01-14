import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { SaleItemsRoutingModule } from './sale-items-routing.module';

import { PresentationService } from './../shared/services/presentation.service';
import { SaleItemService } from './../shared/services/sale-item.service';
import { VarietyService } from './../shared/services/variety.service';

import { PresentationModel } from './../shared/models/presentation.model';
import { SaleItemDetailComponent } from './sale-item-detail/sale-item-detail.component';
import { SaleItemsComponent } from './sale-items.component';

@NgModule({
    imports: [
        SharedModule,
        SaleItemsRoutingModule
    ],
    declarations: [
        SaleItemsComponent,
        SaleItemDetailComponent
    ],
    providers: [
        PresentationService,
        VarietyService,
        SaleItemService
    ]
})
export class SaleItemsModule { }
