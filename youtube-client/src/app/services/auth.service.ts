import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  public isAuthorization: boolean = !!localStorage.getItem('token');

  private personMail: BehaviorSubject<string> = new BehaviorSubject(
    localStorage.getItem('mail') || ''
  );

  public currentPersonMail: Observable<string> = this.personMail.asObservable();

  constructor(private router: Router) {}

  public login(): void {
    this.isAuthorization = true;
    localStorage.setItem('token', 'kkk');
    this.router.navigate(['/']);
  }

  public logout(): void {
    this.isAuthorization = false;
    localStorage.removeItem('token');
    localStorage.removeItem('mail');
    this.router.navigate(['/authorization']);
    this.setPersonMail('Your mail');
  }

  public setPersonMail(mail: string): void {
    this.personMail.next(mail);
  }

  public verificateLogin(): boolean {
    return this.isAuthorization;
  }
}
