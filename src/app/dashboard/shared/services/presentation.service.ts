import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { PresentationModel } from '../models/presentation.model';

const presentations: PresentationModel[] = [
    {
        id: 0,
        name: 'KG'
    },
    {
        id: 1,
        name: 'LB'
    },
    {
        id: 2,
        name: 'Unidad'
    }
];

@Injectable()
export class PresentationService {
    constructor() {}

    getPresentations(): Observable<PresentationModel[]> {
        return of(presentations);
    }
}
