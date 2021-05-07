import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiUrl: string = `${environment.apiUrl}/administrator`;

  constructor(private http: HttpClient) { }

  getAudits() {
    return this.http.get<any>(`${this.apiUrl}/auditList`);
  }

}
