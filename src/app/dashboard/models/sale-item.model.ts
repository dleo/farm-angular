export class SaleItemModel {
    constructor(
        public name: string,
        public code: string,
        public notes: string,
        public price: number,
        public presentation: string,
        public variety_id: number
    ) {}
}
