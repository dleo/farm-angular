import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { SaleItem } from '../shared/models/saleItem';

@Injectable()
export class SalesitemsService {
  private endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = environment.API_ENDPOINT + '/saleitems';
  }

  public list(page: number = 1, name: string = '') {
    return this.http.get(`${this.endpoint}?page=${page}` + (name && `&name=${name}`));
  }

  public show(id) {
    return this.http.get(`${this.endpoint}/${id}`);
  }

  public create(item: SaleItem) {
    return this.http.post(this.endpoint, item);
  }

  public update(id: any, item: SaleItem) {
    return this.http.patch(`${this.endpoint}/${id}`, item);
  }

  public delete(id) {
    return this.http.delete(`${this.endpoint}/${id}`);
  }

}
