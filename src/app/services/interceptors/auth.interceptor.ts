import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      headers: request.headers
        .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNzAzODU4NTQ0LCJpYXQiOjE3MDEyNjY1NDQsInJvbGVzIjpbIkNVU1RPTUVSIl19.a_jJsCeOz2l4A_j7AoaY172b3aQ2kpUKKG50q1yl26s`)
        .set('Content-Type', 'application/json')
    })
    return next.handle(request);
  }
}


export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
}
