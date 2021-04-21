import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private readonly token = "JWT_TOKEN";
  private readonly email = "JWT_EMAIL";

  constructor() { }

  setToken(token: string) {
    localStorage.setItem(this.token, token);
  }

  setEmail(email: string) {
    localStorage.setItem(this.email, email);
  }

  getToken(): string {
    return localStorage.getItem(this.token) ?? "";
  }

  getEmail(): string {
    return localStorage.getItem(this.email) ?? "";
  }

  logOut() {
    localStorage.removeItem(this.token);
    localStorage.removeItem(this.email);
  }

  isAuthenticated():  boolean {
    const token = this.getToken();

    return token != "" && !this.isTokenExpired(token);
  }

  private isTokenExpired(token: string): boolean {
    try {
      if (jwt_decode<any>(token).exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
}
