import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';

import { LoginComponent } from './system/login/login.component';

import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { routes } from './app.routes';
import { TestComponent } from './system/test/test.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {LocalStorageModule} from 'angular-2-local-storage';
import {AuthServiceService} from './system/login/services/auth-service.service';
import {LoadingModule} from 'ngx-loading';

@NgModule({
  declarations: [LoginComponent, AppComponent, TestComponent],
  imports: [
    BrowserModule,
    CoreModule,
    MainModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      routes,
      {
        useHash: true
      }
    ),
    HttpClientModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    FormsModule,
    ReactiveFormsModule,
    LoadingModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
