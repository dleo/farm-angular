import { Headers, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';
import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../../core/services/auth.service';

@Injectable()
export class CommonService {
    headers: Headers;
    reqOptions: RequestOptions;
    constructor(
        private auth: AuthService
    ) {}

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    getHttpOptions() {
        this.reqOptions = new RequestOptions();

        this.headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.auth.token}` });
        this.reqOptions.responseType = ResponseContentType.Json;
        const options = {
            headers: this.headers, responseType: this.reqOptions.responseType
        };
       return options;
    }
}
