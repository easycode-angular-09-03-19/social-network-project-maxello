import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { GlobalAuthService } from '../../../../services/global-auth.service';
import { Auth } from '../../interfaces/Auth';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private globalAuth: GlobalAuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.globalAuth.isLogin ? this.router.navigate(['/']) : null;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login({ ...this.loginForm.value }).subscribe((res: Auth.LoginServerAnswer) => {
        if (!res.error) {
          this.toastr.success('You are logged in.', 'Success!');
          this.router.navigate(['/']);
        }
      }, (res) => {
        this.toastr.error(res.error.message, 'Error!');
      });
    }
  }
}

