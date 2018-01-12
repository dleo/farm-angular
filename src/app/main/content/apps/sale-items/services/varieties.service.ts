import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {GeneralResponse} from '../../../../../core/components/http/general-response';
import {Variety} from '../model/variety';
import {HttpClient} from '@angular/common/http';
import {AuthServiceService} from '../../../../../system/login/services/auth-service.service';
import {AbstractHttpClient} from '../../../../../core/components/http/abstract-http-client';

@Injectable()
export class VarietiesService extends AbstractHttpClient<Variety> {

  constructor(
    http: HttpClient,
    authService: AuthServiceService
  ) { super(http, authService); }

  public loadAllVarieties(): Observable<GeneralResponse<Variety>> {
    return this.paginate( '/varieties');
  }

}
