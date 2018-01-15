import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { SaleItemModel } from './../shared/models/sale-item.model';
import { SaleItemService } from '../shared/services/sale-item.service';

declare var $;

@Component({
  selector: 'app-sale-items',
  templateUrl: './sale-items.component.html',
  styleUrls: ['./sale-items.component.css']
})
export class SaleItemsComponent implements OnInit {
  @Input() saleItems: SaleItemModel[];
  @Output() saleItemSelected: EventEmitter<SaleItemModel> = new EventEmitter();
  saleItemsTable: any;
  tableObject: any;
  tableOptions: any;

  saleItemsPage: any;
  pageNumbers = [];
  pageChanging = false;
  searchValue = '';

  constructor(private router: Router,
              private saleItemService: SaleItemService) {}

  ngOnInit() {
    this.getSaleItems();
  }

  getSaleItems() {
    if (this.tableObject) {
      this.tableObject.destroy();
    }

    this.saleItemService
        .getSaleItemsPage(1)
        .subscribe(
          saleItems => {
            this.saleItemsPage = saleItems;
            this.saleItems = saleItems.data;
            this.pageNumbers = Array.from(Array(saleItems.last_page), (x, i) => i + 1);

            if (this.tableObject) {
              this.tableObject.destroy();
            }

            this.tableOptions = {
              data: saleItems,
              dom: 'rt',
              select: true,
              paging: true,
              sortable: true
            };

            this.saleItemsTable = $(document.getElementById('saleItemsTable'));
            this.tableObject = this.saleItemsTable.DataTable(this.tableOptions);
            this.tableObject.on('select', (e, dt, type, indexes) => {
              this.saleItemSelected.emit(this.saleItems[indexes[0]]);
            });
          }
        );
  }

  goToPage(direction: number) {
    let newPage;

    this.pageChanging = true;
    this.saleItems = undefined;
    if (direction > 0) {
      newPage = direction;
    } else {
      if (direction === 0) {
        newPage = this.saleItemsPage.current_page + 1;
      } else {
        newPage = this.saleItemsPage.current_page - 1;
      }
    }

    this.saleItemService
        .getSaleItemsPage(newPage)
        .subscribe(
          saleItemsPage => {
            this.saleItemsPage = saleItemsPage;
            this.saleItems = saleItemsPage.data;

            this.tableObject.clear().rows.add(this.saleItems).draw();
            this.pageChanging = false;
          }
        );
  }

}
