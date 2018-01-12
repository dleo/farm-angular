import { Injectable } from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {User} from '../model/user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthServiceService {

  private readonly OAUTH_TOKEN_KEY: string = 'TOKEN';

  private readonly DEFAULT_TOKEN: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Im' +
    'Y5MzQzNzFhMzRhZDg2YTA4MTQ0OWZhMGE1OTE1NjVmZTE3NWQxZTFmMjZjOTIxNjgyOWMyY2FjMzFiOGQ3Y2J' +
    'iNTExMjQxNzY5Mzk3MThjIn0.eyJhdWQiOiIxIiwianRpIjoiZjkzNDM3MWEzNGFkODZhMDgxNDQ5ZmEwYTU5' +
    'MTU2NWZlMTc1ZDFlMWYyNmM5MjE2ODI5YzJjYWMzMWI4ZDdjYmI1MTEyNDE3NjkzOTcxOGMiLCJpYXQiOjE1M' +
    'TU2ODk1MTAsIm5iZiI6MTUxNTY4OTUxMCwiZXhwIjoxNTQ3MjI1NTEwLCJzdWIiOiIzIiwic2NvcGVzIjpbXX' +
    '0.Pv3p6khIFZpZ52oofZm2wSWdawjXlTNpEMbjtsQJ1z61kM8RdZ6whP_U6KiSnsxBBBqbNBpLdwrvxguX6xT' +
    'b4HRaf-QYrIcFEvMy71wXPGcEUDoMFQJGJE5fDVV9wfVF75fF_jnRrPd1R9EVxR5io4m2m1R2GtXBIEzPOvuC' +
    '72dPKD9rfs1CAPzD02ByYkS_85bA-FxndFa0DysBnwxLpgwZhNFKaDK0GrtNZLbHW1xn6VKbYlgeAK2Pr2H4g' +
    'Ew32hrPD1Gg2c_3aV51fTLCJ2is_JwnrkfUrTTe6sisANrh9etbugi1mdG8g1Qa2x913E6VvICGI--OCPKeyW' +
    '99XtZeLzjkhKnEoJp0AEdtnhgneUgsQOcY6qvhMAlqHEmVAcHl5rJuztZEK_-9xlM5GIl_qhH6cC1k1ooagI4' +
    'qgPE-rTCiiT0PlOMLNH7-A-aSbOCIE3C4ZhQDZJy1MUvEugWYJQvRz4uJ5qt8O1x299DJv5Q2FCY4XjPZf-nA' +
    'Mz2IdswlyAu_CPMPpYHI52ZUholPxnoOzcadrw3sKO1HEtA1vRg4p_AqMFoh2mTlUcjftgrh725XMkiTjdDDj' +
    '9lxNLF7RPZMTjXkQ_8xQkTKS_gNvjk90C1s5nfThlX5zqtdv46szbUpaARIgd1LkL9_m1IsZW2teviG7HMBw6' +
    'aGPn4';

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  public isLogued(): boolean {
    return this.getToken() != null;
  }

  public getOAuthToken(): string {
    return this.getToken();
  }

  public login(user: User): Observable<boolean> {
    this.putToken('');

    return new Observable(observer => {
      observer.next(true);
    });
  }

  private getToken(): string {
    return this.localStorageService.get<string>(this.OAUTH_TOKEN_KEY);
  }

  private putToken(token: string){
    this.localStorageService.add(this.OAUTH_TOKEN_KEY, this.DEFAULT_TOKEN);
  }

}
