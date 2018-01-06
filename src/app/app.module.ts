import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadingModule } from 'ngx-loading';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';
import { SalesitemsComponent } from './salesitems/salesitems.component';
import { LayoutsModule } from '@layouts/layouts.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../services/auth-guard.service';
import { TokenInterceptor } from '../services/token.interceptor';
import { SalesitemsService } from '../services/salesitems.service';
import { VarietiesService } from '../services/varieties.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { SelectModule } from 'ng2-select';
import { FormComponent } from './salesitems/form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    SalesitemsComponent,
    LoginComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoadingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SelectModule
  ],
  providers: [
    SalesitemsService,
    VarietiesService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
