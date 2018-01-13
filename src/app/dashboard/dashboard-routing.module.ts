import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { SaleItemDetailComponent } from './sale-item-detail/sale-item-detail.component';
import { SaleItemsComponent } from './sale-items/sale-items.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'sale-items',
                component: SaleItemsComponent
            },
            {
                path: 'new-sale-item',
                component: SaleItemDetailComponent
            },
            {
                path: 'sale-item-detail/:id',
                component: SaleItemDetailComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule { }
