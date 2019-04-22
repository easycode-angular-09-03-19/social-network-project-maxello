import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Auth } from "../interfaces/Auth";

interface LoginCred {
  email: string;
  password: string;
}

interface ResetPasswordCred {
  email: string;
}

@Injectable()
export class AuthService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) {}

  login(cred: LoginCred): Observable<Auth.LoginServerAnswer> {
    return this.http.post<Auth.LoginServerAnswer>(`${this.apiUrl}/public/auth/login`, cred).pipe(
      map((res: Auth.LoginServerAnswer): Auth.LoginServerAnswer => {
        if (!res.error) {
          localStorage.setItem('sn_app_token', res.token);
        }
        return res;
      })
    );
  }

  resetPassword(cred: ResetPasswordCred): Observable<Auth.ResetPasswordAnswer> {
    return this.http.post<Auth.ResetPasswordAnswer>(`${this.apiUrl}/public/auth/reset-password`, cred);
  }

  signup(cred: Auth.SignupData): Observable<Auth.SignupAnswer> {
    return this.http.post<Auth.SignupAnswer>(`${this.apiUrl}/public/auth/signup`, cred);
  }
}
