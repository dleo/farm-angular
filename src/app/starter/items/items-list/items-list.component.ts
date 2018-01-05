import { Component, OnInit } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

// Services
import { SaleitemsService } from '../../../shared/services/saleitems.service';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
})
export class ItemsListComponent implements OnInit {
  private items;
  private p: number = 0;
  private total: number = 0;


  constructor(private _SaleItemsService: SaleitemsService,
              private toastr: ToastsManager,
              private vcr: ViewContainerRef, ) { 
              this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.getsaleItems(1);
  }

  getsaleItems(page: number) {
    this._SaleItemsService.getItems(page)
           .subscribe(
             response => {
               this.items = response.data;
               this.p = response.current_page;
               this.total = response.total;
             },
             error => this.toastr.error('Error getting Items!', 'Oops!'),
             () => this.toastr.success('Items obtained successfully.!' , 'Success!')
             );
    }

}
