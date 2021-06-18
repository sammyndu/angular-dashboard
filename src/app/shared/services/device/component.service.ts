import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DeviceComponent } from '../../models/device-component.model';
import { ResponseInfo } from '../../models/response-info.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  apiUrl: string = `${environment.apiUrl}/deviceComponents`;

  constructor(private http: HttpClient) { }

  getComponents() {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/list`);
  }

  getComponent(id: any) {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/${id}`);
  }

  addComponent(component: DeviceComponent) {
    return this.http.post<ResponseInfo>(`${this.apiUrl}/add`, component);
  }

  editComponent(component: DeviceComponent) {
    return this.http.post<ResponseInfo>(`${this.apiUrl}/edit`, component);
  }


}
