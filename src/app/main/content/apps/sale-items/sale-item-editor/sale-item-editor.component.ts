import {Component, Input, OnInit} from '@angular/core';
import {SaleItemsService} from '../services/sale-items.service';
import {VarietiesService} from '../services/varieties.service';
import {Variety} from '../model/variety';
import {SaleItem} from '../model/sale-item';
import {ActivatedRoute, Router} from '@angular/router';
import {SaleItemImpl} from '../model/sale-item-impl';

@Component({
  selector: 'farm-sale-item-editor',
  templateUrl: './sale-item-editor.component.html',
  styleUrls: ['./sale-item-editor.component.less']
})
export class SaleItemEditorComponent implements OnInit {

  varieties: Variety[] = [];

  model: SaleItem = new SaleItemImpl();

  loading = false;

  title = 'New Sale Item';

  @Input()
  public alerts = [];

  constructor(
    private saleItemsService: SaleItemsService,
    private varietiesService: VarietiesService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  save() {
    this.loading = true;
    if (this.model.id) {
      this.saleItemsService.updateSaleItem(this.model, this.model.id).subscribe(
        response => {
          this.loading = false;
          this.router.navigate(['/farm/saleitems', response.id]);
        },
        err => {
          this.alerts.push({
            type: 'danger',
            message: 'Something went wrong!' + err.message
          });
          console.error(err);
          this.loading = false;
        }
      );
    } else {
      console.log(this.model);
      this.saleItemsService.saveSaleItem(this.model).subscribe(
        response => {
          this.loading = false;
          this.router.navigate(['/farm/saleitems', response.id]);
        },
        err => {
          this.alerts.push({
            type: 'danger',
            message: 'Something went wrong!' + err.message
          });
          console.error(err);
          this.loading = false;
        }
      );
    }
  }

  cancel() {
    this.router.navigate(['/farm/saleitems']);
  }

  public closeAlert(alert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  toNumber() {
    this.model.variety_id = +this.model.variety_id;
  }

  ngOnInit() {
    this.loading = true;
    this.varietiesService.loadAllVarieties().subscribe(response => {
      this.varieties = response.data;
    });

    this.route.params
      .subscribe((params) => {
        const id = params.id;

        if (id) {

          this.saleItemsService.loadSaleItemById(id).subscribe(item => {
            this.model = item;
            this.title = 'Sale Item Code: ' + this.model.code;
            this.loading = false;
          });

        } else {

          this.model = new SaleItemImpl();
          this.loading = false;
        }

      });

  }

}
