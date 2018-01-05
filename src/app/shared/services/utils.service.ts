import { Injectable } from '@angular/core';
import { Http ,Response}	from '@angular/http';
import { Observable }	from 'rxjs/Rx';

@Injectable()
export class UtilsService {

  constructor() { }

  /**
   * Function to extract Json data
   * @param res response to return
   */
  public static extractData(res: Response) {
    return res.json().data || {};
  }

  public static extractALL(res: Response) {
    return res.json() || {};
  }
  /**
   * Function to get error information
   * @param error error to print
   */
  public static handleError(error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
