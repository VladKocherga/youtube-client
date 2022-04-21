import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  EMAIL_PATTERN,
  PASSWORD_MIN_LENGTH,
  PASSWORD_PATTERN,
} from 'src/app/constants/constant';
import { IRegistrationData } from 'src/app/interfaces/forms-interfaces';
import AuthService from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export default class RegistrationComponent {
  public registrationForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
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

  public registerPerson(registrationData: IRegistrationData): void {
    if (this.registrationForm.valid) {
      this.authService.login();
      localStorage.setItem('mail', registrationData.mail);
      this.authService.setPersonMail(registrationData.mail);
    }
  }

  public markAsTouched(): void {
    this.registrationForm.get('firstName')?.markAsTouched();
    this.registrationForm.get('lastName')?.markAsTouched();
    this.registrationForm.get('mail')?.markAsTouched();
    this.registrationForm.get('password')?.markAsTouched();
  }
}
