import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsListComponent } from './items-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastModule  } from 'ng2-toastr/ng2-toastr';
@NgModule({
  declarations: [
  	ItemsListComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ToastModule.forRoot()
  ],
  exports : [
  	ItemsListComponent
  ],
  providers: []
})
export class ItemListNewModule { }