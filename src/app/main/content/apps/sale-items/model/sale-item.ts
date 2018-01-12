import {Variety} from './variety';

export interface SaleItem {

  id: number;
  name: string;
  code: string;
  notes: string;
  price: string;
  presentation: number;
  variety_id: number;
  variety: Variety;

}
