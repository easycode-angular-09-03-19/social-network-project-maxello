import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthService } from "./services/auth.service";
import { MatButtonModule, MatCheckboxModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ResetPasswordModalComponent } from './components/reset-password-modal/reset-password-modal.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LoginFormComponent,
    ResetPasswordModalComponent,
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    MatNativeDateModule,
    AuthRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
