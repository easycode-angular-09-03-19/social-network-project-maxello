import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalAuthService {
  get isLogin() {
    return !!localStorage.getItem('sn_app_token');
  }

  logout() {
    localStorage.removeItem('sn_app_token');
  }
  
  constructor() { }
}
