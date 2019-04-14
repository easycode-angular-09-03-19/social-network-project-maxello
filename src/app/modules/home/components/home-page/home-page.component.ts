import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalAuthService } from '../../../../services/global-auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private globalAuth: GlobalAuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.globalAuth.logout();
    this.router.navigate(['/auth/login']);
  }
}
