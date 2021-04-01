import { Component } from '@angular/core';

import '../../node_modules/morrisjs/morris.min.js';
import "../../src/assets/js/dashboard1.js";
import { SessionService } from './shared/services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private sessionService: SessionService) {

  }

  get isLoggedIn(): boolean {
    return this.sessionService.isAuthenticated();
  }
}
