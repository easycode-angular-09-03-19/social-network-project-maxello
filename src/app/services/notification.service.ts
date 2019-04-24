import { Injectable } from '@angular/core';
import { environment } from "@env/environment";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getNotifications() {
    let token = localStorage.getItem('sn_app_token');
    return this.http.get(`${this.apiUrl}/public/users/notification`, {
      headers: {
        "x-access-token": token
      }
    });
  }
}
