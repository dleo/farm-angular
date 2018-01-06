import { Injectable } from "@angular/core";
import { LocalStorage } from "../shared/models/localStorage";
import { environment } from '../environments/environment';

@Injectable()
export class UserLoginService {
  private static _userTokens = {
    jwt: undefined
  };

  public static getJWT() {
    let jwt: string = UserLoginService._userTokens.jwt;
    if (!jwt) {
      jwt = LocalStorage.get('jwt');
      UserLoginService._userTokens.jwt = jwt;
    }
    return jwt;
  }

  public static clearUserState() {
    // Clear user tokens
    UserLoginService._userTokens = {
      jwt: undefined
    };

    LocalStorage.set('jwt', '');
  }

  public static signIn(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      UserLoginService._userTokens.jwt =
      LocalStorage.set('jwt', environment.API_TOKEN);
      resolve();
    });
  }
}
