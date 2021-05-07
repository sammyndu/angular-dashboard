import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Acquirer } from '../models/acquirer.model';

@Injectable({
  providedIn: 'root'
})
export class AcquirerService {

  apiUrl: string = `${environment.apiUrl}/acquirer`;

  constructor(private http: HttpClient) { }

  getAcquirers() {
    return this.http.get<any>(`${this.apiUrl}/list`)
  }

  getAcquirer(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
  }

  editAcquirer(acquirer: Acquirer) {
    return this.http.get<any>(`${this.apiUrl}/edit`)
  }

  addAcquirer(acquirer: Acquirer) {
    return this.http.get<any>(`${this.apiUrl}/add`)
  }
}
