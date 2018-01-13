import { SaleItemService } from './../services/sale-item.service';
import { SaleItemModel } from './../models/sale-item.model';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http/src/static_response';

import { PresentationService } from './../services/presentation.service';
import { VarietyService } from '../services/variety.service';

import { VarietyModel } from '../models/variety.model';
import { PresentationModel } from '../models/presentation.model';

@Component({
  selector: 'app-sale-item-detail',
  templateUrl: './sale-item-detail.component.html',
  styleUrls: ['./sale-item-detail.component.css']
})
export class SaleItemDetailComponent implements OnInit {
  varieties: VarietyModel[];
  presentations: PresentationModel[];
  saleItem: SaleItemModel;
  constructor(
    private varietyService: VarietyService,
    private presentationService: PresentationService,
    private saleItemService: SaleItemService
  ) { }

  ngOnInit() {
    this.getVarieties();
    this.getPresentations();
    this.saleItem = new SaleItemModel('', '', '', 0, '', 0);
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
    this.saleItemService
        .createSaleItem(this.saleItem)
        .subscribe(
          res => {
            console.log('Sale Item created!');
          },
          err => {
            console.error(err);
          }
        );
  }

}
