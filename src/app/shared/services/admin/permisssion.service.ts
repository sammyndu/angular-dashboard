import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseInfo } from '../../models/response-info.model';

@Injectable({
  providedIn: 'root'
})
export class PermisssionService {

  apiUrl: string = `${environment.apiUrl}/permissions`;

  constructor(private http: HttpClient) { }

  getPermissions() {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/list`);
  }

  importPermissions() {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/import`);
  }
}
