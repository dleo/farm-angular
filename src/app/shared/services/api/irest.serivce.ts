import {Observable} from 'rxjs/Observable';
import {PaginatedResult} from './paginated-result';

export interface IRestService<T> {
    findAll(): Observable<T[]>;
    findPaginated(queryParams: any): Observable<PaginatedResult<T>>;
    findOne(id: string): Observable<T>;
    create(entity: T): Observable<T>;
    update(entity: T): Observable<T>;
    remove(id: string): Observable<T>;
}
