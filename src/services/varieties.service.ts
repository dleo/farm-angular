import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VarietiesService {
  private endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = environment.API_ENDPOINT + '/varieties';
  }

  public list(name: string = '') {
    return this.http.get(this.endpoint + (name && `?name=${name}`))
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
