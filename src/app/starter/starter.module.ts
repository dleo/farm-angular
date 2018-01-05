import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemNewComponent } from './items/item-new/item-new.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { StarterRoutingModule } from './starter.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule  } from 'ng2-toastr/ng2-toastr';
@NgModule({
  declarations: [
  	ItemNewComponent, 
  	ItemsListComponent
  ],
  imports: [
    StarterRoutingModule,
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    ToastModule.forRoot()
  ],
  exports: [
  	ItemNewComponent, 
  	ItemsListComponent
  ]
})
export class StarterModule { }
