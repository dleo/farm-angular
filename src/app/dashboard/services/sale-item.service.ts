import { SaleItemModel } from './../models/sale-item.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthService } from '../../core/services/auth.service';
import { CommonService } from './../../shared/services/common.service';

@Injectable()
export class SaleItemService {
    constructor(
        private http: Http,
        private commonService: CommonService,
        private auth: AuthService
    ) {}

    createSaleItem(saleItem: SaleItemModel) {
        return this.http
                   .post(`${this.auth.apiUrl}/saleitems`,
                        JSON.stringify(saleItem),
                        this.commonService.getHttpOptions()
                    )
                    .pipe(
                        tap(response => { console.log('todo ok'); } ),
                        catchError(this.commonService.handleError('createSaleItem')
                    ));
    }

}
