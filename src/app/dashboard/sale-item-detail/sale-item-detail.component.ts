import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PresentationService } from './../services/presentation.service';
import { SaleItemService } from './../services/sale-item.service';
import { VarietyService } from '../services/variety.service';

import { PresentationModel } from '../models/presentation.model';
import { SaleItemModel } from './../models/sale-item.model';
import { VarietyModel } from '../models/variety.model';

@Component({
  selector: 'app-sale-item-detail',
  templateUrl: './sale-item-detail.component.html',
  styleUrls: ['./sale-item-detail.component.css']
})
export class SaleItemDetailComponent implements OnInit {
  varieties: VarietyModel[];
  presentations: PresentationModel[];
  saleItem: SaleItemModel;
  selectedVariety = '';
  constructor(
    private varietyService: VarietyService,
    private presentationService: PresentationService,
    private saleItemService: SaleItemService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getVarieties();
    this.getPresentations();
    this.saleItem = new SaleItemModel('', '', '', undefined, '', -1);
  }

  getVarieties() {
    this.varietyService
        .getVarieties()
        .subscribe(
          varieties => {
            this.varieties = varieties;
          }
        );
  }

  getPresentations() {
    this.presentationService
        .getPresentations()
        .subscribe(
          presentations => {
            this.presentations = presentations;
          }
        );
  }

  createItem() {
    this.saleItem.variety_id = +this.selectedVariety;
    this.saleItemService
        .createSaleItem(this.saleItem)
        .subscribe(
          res => {
            // console.log('Sale Item created!');
            this.router.navigate(['/dashboard/sale-items']);
          },
          err => {
            console.error(err);
          }
        );
  }

}
