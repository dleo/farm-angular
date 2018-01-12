import {Observable} from 'rxjs/Observable';
import {GeneralResponse} from './general-response';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthServiceService} from '../../../system/login/services/auth-service.service';

export abstract class AbstractHttpClient<T> {

  protected BASE_URL = 'https://stormy-coast-32294.herokuapp.com/api';

  public constructor(
    protected http: HttpClient,
    protected authService: AuthServiceService
  ) {  }

  protected paginate(endpoint: string, page: number = 1): Observable<GeneralResponse<T>> {
    return this.http.get<GeneralResponse<T>>(this.BASE_URL + endpoint + '?page=' + page, {
      headers: this.getAuthHeaders(),
    });
  }

  protected save(endpoint: string, item: T): Observable<T> {
    return this.http.post<T>(this.BASE_URL + endpoint, item, {
      headers: this.getAuthHeaders()
    });
  }

  protected update(endpoint: string, item: T, id: number): Observable<T> {
    return this.http.put<T>(this.BASE_URL + endpoint + '/' + id, item, {
      headers: this.getAuthHeaders()
    });
  }

  protected loadById( endpoint: string, id: number): Observable<T> {
    return this.http.get<T>(this.BASE_URL + endpoint + '/' + id, {
      headers: this.getAuthHeaders()
    });
  }

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getOAuthToken());
  }

}
