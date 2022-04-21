import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  EMAIL_PATTERN,
  PASSWORD_MIN_LENGTH,
  PASSWORD_PATTERN,
} from 'src/app/constants/constant';
import { IAuthData } from 'src/app/interfaces/forms-interfaces';
import AuthService from 'src/app/services/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export default class AuthorizationComponent {
  public authorizationForm: FormGroup = new FormGroup({
    mail: new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_PATTERN),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(PASSWORD_MIN_LENGTH),
      Validators.pattern(PASSWORD_PATTERN),
    ]),
  });

  constructor(private authService: AuthService) {}

  public markAsTouched(): void {
    this.authorizationForm.get('mail')?.markAsTouched();
    this.authorizationForm.get('password')?.markAsTouched();
  }

  public login(authData: IAuthData): void {
    if (this.authorizationForm.valid) {
      this.authService.login();
      localStorage.setItem('mail', authData.mail);
      this.authService.setPersonMail(authData.mail);
    }
  }
}
