import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {SaleitemComponent} from './saleitem.component';
import {SaleitemFormComponent} from './saleitem-form/saleitem-form.component';
import {Routes, RouterModule} from '@angular/router';
import {NgxDatatableModule} from '@swimlane/ngx-datatable/release';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SaleitemListComponent} from './saleitem-list/saleitem-list.component';

const routes: Routes = [
    {
        path: 'sale-items',
        component: SaleitemComponent,
        children: [
            { path: '', component: SaleitemListComponent, pathMatch: 'full'},
            { path: 'create', component: SaleitemFormComponent, pathMatch: 'full' },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        NgxDatatableModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        SaleitemComponent,
        SaleitemListComponent,
        SaleitemFormComponent
    ],
    providers: [

    ]
})
export class SaleitemModule {

}
