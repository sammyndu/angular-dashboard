import { Component, OnInit } from '@angular/core';
import { SessionService } from '../shared/services/session.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this.sessionService.isAuthenticated();
  }

}
