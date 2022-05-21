import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import AuthService from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export default class AuthorizationGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  public canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isAuthorization) {
      return true;
    }
    this.router.navigate(['/authorization'], {
      queryParams: {
        auth: false,
      },
    });
    return false;
  }
}
