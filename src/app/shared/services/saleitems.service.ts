import { Injectable } from '@angular/core';
import { Http ,Response}	from '@angular/http';
import { Observable }	from 'rxjs/Rx';
import { environment }	from 'environments/environment';
import { CustomRequestOptions } from './custom-request-options.service';
import { UtilsService } from './utils.service';

import { Item } from '../interfaces/item.interface';

@Injectable()
export class SaleitemsService {
	private url: string;

  constructor(private http: Http, private options: CustomRequestOptions) { 
    this.url = environment.APP_URI_BASE + '/saleitems';
    this.options.setAuthToken(environment.API_TOKEN);
    this.options.setHeader('Accept', 'application/json');
  }

  public getItems(page: number){

     return this.http.get(this.url + '?page=' + page, this.options)
                 .map(UtilsService.extractALL)
                 .catch(UtilsService.handleError);

  }

  public createItem(data: Item){
     return this.http.post(this.url, data,  this.options)
                 .map(UtilsService.extractALL)
                 .catch(UtilsService.handleError);    

  }

}