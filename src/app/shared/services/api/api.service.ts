import {HttpClient, HttpParams} from '@angular/common/http';
import {Constants} from '../constants';
import {Observable} from 'rxjs/Observable';
import {IRestService} from './irest.serivce';
import { Injectable } from '@angular/core';
import {PaginatedResult} from './paginated-result';
import 'rxjs/add/operator/map';
@Injectable()
export abstract class ApiService<T> implements IRestService<T> {

    protected url: string;

    constructor(protected http: HttpClient, protected constants: Constants, protected resource: string) {
        this.url = this.constants.API_URL + resource;
    }

    findAll(): Observable<T[]> {
        return this.http.get<PaginatedResult<T>>(this.url).map(response => {
            return response.data;
        });
    }

    findPaginated(queryParams?: any): Observable<PaginatedResult<T>> {
        const reqOpts = {
            params: new HttpParams()
        };
        if (queryParams) {
            for (const key in queryParams) {
                if (queryParams.hasOwnProperty(key)) {
                    reqOpts.params.set(key, queryParams[key]);
                }
            }
        }
        return this.http.get<PaginatedResult<T>>(this.url, reqOpts);
    }

    findOne(id: string): Observable<T> {
        return this.http.get<T>(`${this.url}/${id}`);
    }

    create(entity: T): Observable<T> {
        return this.http.post<T>(this.url, entity);
    }

    update(entity: T): Observable<T> {
        return this.http.patch<T>(this.url, entity);
    }

    remove(id: string): Observable<T> {
        return this.http.delete<T>(`${this.url}/${id}`);
    }

}
