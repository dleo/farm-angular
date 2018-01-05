import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemNewComponent } from './item-new.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastModule  } from 'ng2-toastr/ng2-toastr';

@NgModule({
  declarations: [
  	ItemNewComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ToastModule.forRoot()
  ],
  exports : [
  	ItemNewComponent
  ],
  providers: []
})
export class ItemNewModule { }
