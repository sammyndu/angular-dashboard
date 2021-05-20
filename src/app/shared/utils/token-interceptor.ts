import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { tap } from 'rxjs/operators';
import { SessionService } from '../services/session.service';
import { ToastService } from '../services/toast.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private _sessionService: SessionService,
    private _toastService: ToastService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this._sessionService.getToken()}`
        }
      });
    return next.handle(request).pipe(
      tap(
        x => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._toastService.showError(
                'You must login to perform this action.'
              );
              this.auth.redirectToLogin();
            }

            if (err.status === 0) {
              this._toastService.showError(
                'Server Down.'
              );
              //this.auth.redirectToLogin();
            }
          }
        }
      )
    );
  }
}
