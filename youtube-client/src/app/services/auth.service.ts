import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  public isAuthorization: boolean = !!localStorage.getItem('token');

  constructor(private router: Router) {}

  public login(): void {
    this.isAuthorization = true;
    this.router.navigate(['/']);
  }

  public logout(): void {
    this.isAuthorization = false;
    localStorage.removeItem('token');
    this.router.navigate(['/authorization']);
  }

  public verificateLogin(): boolean {
    return this.isAuthorization;
  }
}
