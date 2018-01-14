import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthService } from '../../core/services/auth.service';
import { CommonService } from './../../shared/services/common.service';

import { SaleItemModel } from './../models/sale-item.model';

@Injectable()
export class SaleItemService {
    options: any;
    constructor(
        private http: Http,
        private commonService: CommonService,
        private auth: AuthService
    ) {
        this.options = this.commonService.getHttpOptions();
    }

    getSaleItems(): Observable<SaleItemModel[]> {
        return this.http.get(`${this.auth.apiUrl}/saleitems`, this.options)
                        .pipe(
                            map((response: Response) => response.json().data as SaleItemModel[]),
                            catchError(this.commonService.handleError('getSaleItems', []))
                        );
    }

    getSaleItemById(saleItemId: number): Observable<SaleItemModel> {
        return this.http.get(`${this.auth.apiUrl}/saleitems/${saleItemId}`, this.options)
                        .pipe(
                            map((response: Response) => response.json() as SaleItemModel),
                            catchError(this.commonService.handleError('getSaleItem'))
                        );
    }

    getSaleItemsPage(pageNumber: number): Observable<any> {
        return this.http.get(`${this.auth.apiUrl}/saleitems?page=${pageNumber}`, this.options)
                        .pipe(
                            map((response: Response) => response.json() as SaleItemModel[]),
                            catchError(this.commonService.handleError('getSaleItemsPage', []))
                        );
    }

    createSaleItem(saleItem: SaleItemModel) {
        return this.http
                   .post(`${this.auth.apiUrl}/saleitems`,
                        JSON.stringify(saleItem),
                        this.commonService.getHttpOptions()
                    )
                    .pipe(
                        tap(response => { }),
                        catchError(this.commonService.handleError('createSaleItem')
                    ));
    }

    updateSaleItem(saleItem: SaleItemModel) {
        return this.http
                   .put(`${this.auth.apiUrl}/saleitems/${saleItem.id}`,
                        JSON.stringify(saleItem),
                        this.commonService.getHttpOptions()
                    )
                    .pipe(
                        tap(response => { }),
                        catchError(this.commonService.handleError('updateSaleItem')
                    ));
    }
}
