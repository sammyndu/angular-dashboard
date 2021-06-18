import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DeviceType } from '../../models/device-type.model';
import { ResponseInfo } from '../../models/response-info.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  apiUrl: string = `${environment.apiUrl}/deviceTypes`;

  constructor(private http: HttpClient) { }

  getTypes() {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/list`);
  }

  getType(id: any) {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/${id}`);
  }

  addType(type: DeviceType) {
    return this.http.post<ResponseInfo>(`${this.apiUrl}/add`, type);
  }

  editType(type: DeviceType) {
    return this.http.post<ResponseInfo>(`${this.apiUrl}/edit`, type);
  }

}
