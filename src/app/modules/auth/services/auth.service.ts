import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { LoginServerAnswer } from "../interfaces/LoginServerAnswer";

interface LoginCred {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) {}

  login(cred: LoginCred): Observable<LoginServerAnswer> {
    return this.http.post<LoginServerAnswer>(`${this.apiUrl}/public/auth/login`, cred).pipe(
      map((res: LoginServerAnswer): LoginServerAnswer => {
        if (!res.error) {
          localStorage.setItem('sn_app_token', res.token);
        }
        return res;
      })
    );
  }
}
