import {SaleItem} from './sale-item';
import {Variety} from './variety';

export class SaleItemImpl implements SaleItem {

  id: number;
  name: string;
  code: string;
  notes: string;
  price: string;
  presentation: number;
  variety_id: number;
  variety: Variety;

  constructor() {
  }
}
