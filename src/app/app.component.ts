import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import '../../node_modules/morrisjs/morris.min.js';
import "../../src/assets/js/dashboard1.js";
import { SessionService } from './shared/services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private sessionService: SessionService, private router: Router) {

  }

  ngOnInit(): void {
    if(!this.sessionService.isAuthenticated()) {
      this.router.navigate(['auth/login']);
    }
  }

  get isLoggedIn(): boolean {
    return this.sessionService.isAuthenticated();
  }
}
