import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public sessionService: SessionService, public router: Router) {}
  canActivate(): boolean {
    if (!this.sessionService.isAuthenticated()) {
      this.router.navigate(['auth/login']);
      return false;
    }
    return true;
  }
}
