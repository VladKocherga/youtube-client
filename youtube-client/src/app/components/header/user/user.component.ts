import { Component } from '@angular/core';
import AuthService from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export default class UserComponent {
  public personMail: string = 'Your mail';

  public isVisibleAdmin: boolean = false;

  constructor(public authService: AuthService) {
    authService.currentPersonMail.subscribe((mail: string): void => {
      this.personMail = mail;
    });
  }
}
