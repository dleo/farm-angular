import { Injectable } from '@angular/core';
import { Http ,Response}	from '@angular/http';
import { Observable }	from 'rxjs/Rx';
import { environment }	from 'environments/environment';
import { CustomRequestOptions } from './custom-request-options.service';
import { UtilsService } from './utils.service';

@Injectable()
export class VarietiesService {
  private url: string;
  constructor(private http: Http, private options: CustomRequestOptions) {
    this.url = environment.APP_URI_BASE + '/varieties?page=';
    this.options.setAuthToken(environment.API_TOKEN);
    this.options.setHeader('Accept', 'application/json');
  }

  public getVarieties(page: number){

     return this.http.get(this.url + page, this.options)
                 .map(UtilsService.extractALL)
                 .catch(UtilsService.handleError);

  }

}
