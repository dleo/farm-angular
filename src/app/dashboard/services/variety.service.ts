import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthService } from '../../core/services/auth.service';
import { CommonService } from '../../shared/services/common.service';

@Injectable()
export class VarietyService {
    headers: Headers;
    reqOptions: RequestOptionsArgs;
    constructor(
        private http: Http,
        private auth: AuthService,
        private commonService: CommonService
    ) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Token', this.auth.token);
        this.reqOptions.headers = this.headers;
    }

    getVarieties() {
        return this.http.get(`${this.auth.apiUrl}/varieties`, this.reqOptions)
                   .pipe(
                       catchError(this.commonService.handleError('getVarieties', []))
                   );
    }
}
