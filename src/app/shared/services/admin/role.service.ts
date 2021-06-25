import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseInfo } from '../../models/response-info.model';
import { Role } from '../../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  apiUrl: string = `${environment.apiUrl}/roles`;

  constructor(private http: HttpClient) { }

  getRoles() {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/list`);
  }

  getRole(id: string) {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/${id}`);
  }

  updateRole(role: Role) {
    return this.http.post<ResponseInfo>(`${this.apiUrl}/edit`, role);
  }

  addRole(role: Role) {
    return this.http.post<ResponseInfo>(`${this.apiUrl}/add`, role);
  }

  getUsers(id: string) {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/${id}/users`);
  }

  getPermissions(id: string) {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/${id}/permissions`);
  }

  updateRoleUser(ids: any, roleId: string) {
    return this.http.post<ResponseInfo>(`${this.apiUrl}/updateusers/${roleId}`, ids);
  }

}
