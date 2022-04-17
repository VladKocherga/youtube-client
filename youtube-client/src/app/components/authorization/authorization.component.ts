import { Component } from '@angular/core';
import AuthService from 'src/app/services/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export default class AuthorizationComponent {
  constructor(private authService: AuthService) {}

  public switchAuthorization() {
    this.authService.login();
    localStorage.setItem('token', 'kkk');
  }
}
