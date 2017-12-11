import {Component, OnInit} from '@angular/core';
import {SaleItem} from '../../../shared/model/saleitem.model';
import {SaleitemService} from '../../../shared/services/saleitem/saleitem.service';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import {PaginatedResult} from '../../../shared/services/api/paginated-result';

@Component({
  selector: 'app-saleitem-list',
  templateUrl: './saleitem-list.component.html',
  styleUrls: ['./saleitem-list.component.css']
})
export class SaleitemListComponent implements OnInit {

    public saleItems: SaleItem[];
    public tableData: SaleItem[];
    public columns = [
        {name: 'Id', prop: 'id', sort: true},
        {name: 'Name', prop: 'name', sort: true},
        {name: 'Code', prop: 'code', sort: true},
        {name: 'Price', prop: 'price', sort: true},
        {name: 'Presentation', prop: 'presentation', sort: true}
    ];

    constructor(protected router: Router, protected service: SaleitemService) {
        this.tableData = [];
    }

    ngOnInit() {
        this.service.findPaginated({page: 2})
            .map( (result: PaginatedResult<SaleItem>) => {
                return result.data;
            })
            .subscribe( (result: SaleItem[]) => {
                    this.saleItems = result;
                    this.tableData = result;
                },
                error => {
                    console.log(error);
                });
    }

    goToSaveItem() {
        this.router.navigateByUrl('sale-items/create');
    }

    updateFilter(event, field: string) {
        const val = event.target.value.toLowerCase();
        if (val.trim() === '') {
            this.tableData = this.saleItems;
            return;
        }
        // filter our data
        this.tableData = this.saleItems.filter(function(d) {
            const fieldValue = String(d[field]);
            return fieldValue.toLowerCase().indexOf(val) !== -1 || !val;
        });
    }
}
