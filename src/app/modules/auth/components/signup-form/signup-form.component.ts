import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConfirmPasswordValidator } from '../../../../helpers/validators';
import { Auth } from '../../interfaces/Auth';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { GlobalAuthService } from 'app/services/global-auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private globalAuth: GlobalAuthService
  ) { }

  ngOnInit() {
    this.globalAuth.isLogin ? this.router.navigate(['/']) : null;
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nickname: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      password: ['', Validators.required],
      gender_orientation: ['male', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      confirmPassword: [''],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
      date: ['', Validators.required]
    }, { validator: ConfirmPasswordValidator });
  }

  transformFormData(form: any) {
    form.date_of_birth_day = form.date.getDate() + '';
    form.date_of_birth_month = form.date.getMonth() + 1 + '';
    form.date_of_birth_year =  form.date.getFullYear() + '';
    delete(form.date);

    return form;
  }

  onSubmit() {
    if(this.signUpForm.valid){
      this.authService.signup(this.transformFormData({ ...this.signUpForm.value })).subscribe((res: Auth.LoginServerAnswer) => {
        if (!res.error) {
          this.toastr.success(res.message, 'Success!');
          this.router.navigate(['/auth/login']);
        } else {
          this.toastr.error(res.message, 'Error!');
        }
      }, (res) => {
        this.toastr.error(res.error.message, 'Error!');
      });
    }
  }

}
