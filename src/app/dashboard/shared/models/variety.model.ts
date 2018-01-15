interface Specie {
    id: number;
    common_name: string;
    scientific_name: string;
    created_at: Date;
    updated_at: Date;
}

export class VarietyModel {
    constructor(
        public id: number,
        public name: string,
        public specie: Specie
    ) {}
}
