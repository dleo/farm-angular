import { Injectable } from '@angular/core';
import {GeneralResponse} from '../../../../../core/components/http/general-response';
import {SaleItem} from '../model/sale-item';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthServiceService} from '../../../../../system/login/services/auth-service.service';
import {AbstractHttpClient} from '../../../../../core/components/http/abstract-http-client';

@Injectable()
export class SaleItemsService extends AbstractHttpClient<SaleItem> {

  private readonly SALE_ITEMS_ENDPOINT = '/saleitems';

  constructor(
    http: HttpClient,
    authService: AuthServiceService
  ) { super(http, authService); }

  public loadSaleItems(page: number = 1): Observable<GeneralResponse<SaleItem>> {
    return this.paginate(this.SALE_ITEMS_ENDPOINT, page);
  }

  public saveSaleItem(item: SaleItem): Observable<SaleItem> {
    return this.save(this.SALE_ITEMS_ENDPOINT, item);
  }

  public updateSaleItem(item: SaleItem, id: number): Observable<SaleItem> {
    return this.update(this.SALE_ITEMS_ENDPOINT, item, id);
  }

  public loadSaleItemById(id: number): Observable<SaleItem> {
    return this.loadById(this.SALE_ITEMS_ENDPOINT, id);
  }

}
