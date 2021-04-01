import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dashboard } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

    apiUrl: string = `${environment.apiUrl}/home`;

    constructor(private http: HttpClient) { }

    getDashboardData(): Observable<Dashboard> {
        return this.http.get<Dashboard>(this.apiUrl);
    }
}
