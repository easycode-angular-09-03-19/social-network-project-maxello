import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { GlobalAuthService } from 'src/app/services/global-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private globalAuth: GlobalAuthService
  ) { }

  ngOnInit() {
    this.globalAuth.isLogin ? this.router.navigate(['/']) : null;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login({ ...this.loginForm.value }).subscribe((res) => {
        if(!res.error){
          this.router.navigate(['/']);
        }
      }, (error) => {
        alert(error.error.message);
      });
    }
  }
}
