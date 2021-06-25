import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Login } from '../../shared/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: Login = new Login;
  isLoading: boolean = false;

  constructor(private authService: AuthService,
    private sessionService: SessionService,
    private router: Router) { }

  ngOnInit() {
    this.isLoggedIn();
  }

  login() {
    this.isLoading= true;
    this.authService.login(this.loginModel).subscribe((response: any) => {
      this.isLoading = false;
      console.log(response);
      this.sessionService.setToken(response.token);
      this.sessionService.setEmail(response.email);
      if(this.sessionService.isAuthenticated()) {
        window.location.href = "";
      }
    }, (err: any) => {
      //this.toastService.showError(err,  "Error");
      this.isLoading = false;
    })
  }

  isLoggedIn() {
    if(this.sessionService.isAuthenticated()) {
      this.router.navigate(['']);
    }
  }

}
