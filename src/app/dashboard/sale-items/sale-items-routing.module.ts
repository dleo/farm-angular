import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SaleItemsComponent } from './sale-items.component';
import { SaleItemDetailComponent } from './sale-item-detail/sale-item-detail.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'list-items',
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
export class SaleItemsRoutingModule { }
