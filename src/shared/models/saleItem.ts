export class SaleItem {
  name: string;
  code: string;
  notes: string;
  price: number;
  presentation: string;
  variety: Object;
  variety_id: number;

  constructor(name: string, code: string, price: number, presentation: string, variety_id: number){
    this.name = name;
    this.code = code;
    this.price = price;
    this.presentation = presentation;
    this.variety_id = variety_id;
  }
}
