import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private readonly token = "JWT_TOKEN";

  constructor() { }

  setToken(token: string) {
    localStorage.setItem(this.token, token);
  }

  getToken(): string {
    return localStorage.getItem(this.token) ?? "";
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
