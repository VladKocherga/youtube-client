import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from '../constants/constant';

@Injectable()
export default class ResponseInterceptor implements HttpInterceptor {
  private clonedRequest: HttpRequest<string> = new HttpRequest('GET', '');

  public intercept(
    request: HttpRequest<string>,
    next: HttpHandler
  ): Observable<HttpEvent<string>> {
    this.clonedRequest = request.clone({
      params: request.params.set('key', API_KEY),
    });

    return next.handle(this.clonedRequest);
  }
}
