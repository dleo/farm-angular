import { Response } from '@angular/http/src/static_response';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthService } from '../../../core/services/auth.service';
import { HttpCommonService } from '../../../shared/services/http-common.service';
import { VarietyModel } from '../models/variety.model';

@Injectable()
export class VarietyService {

    options = {};
    constructor(
        private http: Http,
        private auth: AuthService,
        private httpCommonService: HttpCommonService
    ) {
        this.options = this.httpCommonService.getHttpOptions();
    }

    getVarieties(): Observable<VarietyModel[]> {
        return this.http.get(`${this.auth.apiUrl}/varieties`, this.options)
                   .pipe(
                        map((response: Response) => response.json().data as VarietyModel[]),
                        catchError(this.httpCommonService.handleError('getVarieties', [])
                    ));
    }

}

