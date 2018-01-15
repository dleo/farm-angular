import { VarietyModel } from './variety.model';

export class SaleItemModel {
    constructor(
        public name: string,
        public code: string,
        public notes: string,
        public price: number,
        public presentation: string,
        public variety_id: number,
        public variety?: VarietyModel,
        public id?: number
    ) {}
}
