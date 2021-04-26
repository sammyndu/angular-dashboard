import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseInfo } from '../../models/response-info.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  apiUrl: string = `${environment.apiUrl}/roles`;

  constructor(private http: HttpClient) { }

  getRoles() {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/list`);
  }

}
