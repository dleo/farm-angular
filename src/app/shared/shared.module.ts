import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common/';
import {AppFooterComponent, AppHeaderComponent, AppMenuComponent, AppSettingsComponent} from './components';
import {Constants} from './services/constants';
import {VarietyService} from './services/variety/variety.service';
import {SaleitemService} from './services/saleitem/saleitem.service';
import {TokenInterceptor} from './interceptors/token.interceptor';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        AppRoutingModule
    ],
    declarations: [
        AppHeaderComponent,
        AppMenuComponent,
        AppSettingsComponent,
        AppFooterComponent,
    ],
    exports: [
        // App common
        AppHeaderComponent,
        AppMenuComponent,
        AppSettingsComponent,
        AppFooterComponent,
    ],
    providers: [
        // Services
        Constants,
        VarietyService,
        SaleitemService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ]
})
export class SharedModule { }
