import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-items',
  templateUrl: './sale-items.component.html',
  styleUrls: ['./sale-items.component.css']
})
export class SaleItemsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToItemCreation() {
    this.router.navigate(['/dashboard/new-sale-item']);
  }

}
