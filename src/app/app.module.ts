import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {DatatablesDemoComponent} from './datatables-demo/datatables-demo.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {SaleitemModule} from './modules/saleitem/saleitem.module';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        DatatablesDemoComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NgxDatatableModule,
        AppRoutingModule,
        SaleitemModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
