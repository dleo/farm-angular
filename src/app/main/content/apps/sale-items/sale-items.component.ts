import { Component, OnInit } from '@angular/core';
import {SaleItemsService} from './services/sale-items.service';
import {SaleItem} from './model/sale-item';
import {Router} from "@angular/router";

@Component({
  selector: 'farm-sale-items',
  templateUrl: './sale-items.component.html',
  styleUrls: ['./sale-items.component.less']
})
export class SaleItemsComponent implements OnInit {

  loading = false;

  pagination = {
    page: 1,
    total: 70,
    to: 10,
    from: 1
  };

  items: SaleItem[] = [];

  constructor(
    private saleItemsService: SaleItemsService,
    private router: Router
  ) { }

  onPageChange() {
    this.paginate(this.pagination.page);
  }

  ngOnInit() {
    this.paginate(1);
  }

  private paginate(page) {
    this.loading = true;
    this.saleItemsService.loadSaleItems(page).subscribe(response => {
      this.items = response.data;
      this.pagination.page = response.current_page;
      this.pagination.total = response.total;
      this.pagination.to = response.to;
      this.pagination.from = response.from;
      this.loading = false;
    });
  }

}
