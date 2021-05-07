import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DeviceType } from '../../models/device-type.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  apiUrl: string = `${environment.apiUrl}/deviceTypes`;

  constructor(private http: HttpClient) { }

  getTypes() {
    return this.http.get<any>(`${this.apiUrl}/list`);
  }

  getType(id: any) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addType(type: DeviceType) {
    return this.http.post<any>(`${this.apiUrl}/add`, type);
  }

  editType(type: DeviceType) {
    return this.http.post<any>(`${this.apiUrl}/edit`, type);
  }

}
