import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../../models/login.model';
import { catchError } from 'rxjs/operators';
import { SessionService } from '../session.service';
import { ToastService } from '../toast.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router, private toastService: ToastService) { }

  login(loginModel: Login): Observable<any> {
    return this.http.post(`${environment.apiUrl}/account/login`, loginModel).pipe(
      catchError((err : any) => {
        console.log(err);
        this.toastService.showError(err.error, "Error");
        return throwError(err);
      }));
  }

  redirectToLogin() {
    this.router.navigate(['/auth/login']);
  }

}
