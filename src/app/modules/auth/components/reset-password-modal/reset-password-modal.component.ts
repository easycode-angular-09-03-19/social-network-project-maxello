import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Auth } from '../../interfaces/Auth';

@Component({
  selector: 'app-reset-password-modal',
  templateUrl: './reset-password-modal.component.html',
  styleUrls: ['./reset-password-modal.component.css']
})
export class ResetPasswordModalComponent implements OnInit {
  @Output('modalClose') modalCloseEvent = new EventEmitter();
  resetPasswordForm: FormGroup;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  closeModal() {
    this.modalCloseEvent.emit();
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      this.authService.resetPassword({ ...this.resetPasswordForm.value }).subscribe((res: Auth.ResetPasswordAnswer) => {
        if (!res.error) {
          this.toastr.success(res.message, 'Success!');
          this.closeModal();
        }
      }, (res) => {
        this.toastr.error(res.error.message, 'Error!');
      });
    }
  }
}
