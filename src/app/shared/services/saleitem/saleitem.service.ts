import {ApiService} from '../api/api.service';
import {Constants} from '../constants';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SaleItem} from '../../model/saleitem.model';

@Injectable()
export class SaleitemService extends ApiService<SaleItem> {

    constructor(protected http: HttpClient, protected constants: Constants) {
        super(http, constants, 'saleitems');
    }
}
