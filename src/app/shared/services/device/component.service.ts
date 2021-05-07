import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DeviceComponent } from '../../models/device-component.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  apiUrl: string = `${environment.apiUrl}/deviceComponent`;

  constructor(private http: HttpClient) { }

  getComponents() {
    return this.http.get<any>(`${this.apiUrl}/list`);
  }

  getComponent(id: any) {
    return this.http.get<DeviceComponent>(`${this.apiUrl}/${id}`);
  }

  addComponent(component: DeviceComponent) {
    return this.http.post<any>(`${this.apiUrl}/add`, component);
  }

  editComponent(component: DeviceComponent) {
    return this.http.post<any>(`${this.apiUrl}/edit`, component);
  }


}
