import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseInfo } from '../../models/response-info.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiUrl: string = `${environment.apiUrl}/administrator`;

  constructor(private http: HttpClient) { }

  getAudits() {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/audit`);
  }

}
