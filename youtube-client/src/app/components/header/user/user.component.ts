import { Component } from '@angular/core';
import AuthService from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export default class UserComponent {
  constructor(public authService: AuthService) {}
}
