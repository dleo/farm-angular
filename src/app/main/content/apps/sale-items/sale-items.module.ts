import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SaleItemsComponent} from './sale-items.component';
import {SaleItemsService} from './services/sale-items.service';
import {VarietiesService} from './services/varieties.service';
import {SaleItemEditorComponent} from './sale-item-editor/sale-item-editor.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {LoadingModule} from 'ngx-loading';
import {CoreModule} from '../../../../core/core.module';

const routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    LoadingModule,
    CoreModule
  ],
  exports: [
    SaleItemEditorComponent
  ],
  declarations: [SaleItemsComponent, SaleItemEditorComponent],
  providers: [SaleItemsService, VarietiesService],
})
export class SaleItemsModule { }
