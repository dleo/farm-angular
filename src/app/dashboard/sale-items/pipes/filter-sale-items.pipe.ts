import { SaleItemModel } from './../../shared/models/sale-item.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterSaleItems',
    pure: false
})
export class FilterSaleItemsPipe implements PipeTransform {
    transform(saleItems: SaleItemModel[], searchValue: string) {
        return saleItems.filter(el => el.name.toLowerCase().indexOf(searchValue.trim().toString().toLowerCase()) !== -1 );
    }
}
