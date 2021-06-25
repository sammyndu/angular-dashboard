import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseInfo } from '../../models/response-info.model';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/list`);
  }

  getUser(id: string) {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/${id}`);
  }

  addUser(user: User) {
    return this.http.post<ResponseInfo>(`${this.apiUrl}/add`, user);
  }

  updateUser(user: User) {
    return this.http.post<ResponseInfo>(`${this.apiUrl}/edit`, user);
  }

}
