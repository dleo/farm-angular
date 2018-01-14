import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  mode = 'create';

  constructor(
    private varietyService: VarietyService,
    private presentationService: PresentationService,
    private saleItemService: SaleItemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getVarieties();
    this.getPresentations();

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mode = 'edit';
      this.getSaleItem(id);
    } else {
      this.saleItem = new SaleItemModel('', '', '', undefined, '', -1);
    }
  }

  getSaleItem(id: number) {
    this.saleItemService
        .getSaleItemById(id)
        .subscribe(
        saleItem => {
          this.saleItem = saleItem;
          this.selectedVariety = saleItem.variety.id.toString();
        }
      );
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
            this.router.navigate(['/dashboard/sale-items']);
          },
          err => {
            console.error(err);
          }
        );
  }

  updateItem() {
    this.saleItem.variety_id = +this.selectedVariety;
    this.saleItemService
        .updateSaleItem(this.saleItem)
        .subscribe(
        res => {
          this.router.navigate(['/dashboard/sale-items']);
        },
        err => {
          console.error(err);
        }
    );
  }

}
