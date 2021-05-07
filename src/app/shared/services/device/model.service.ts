import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DeviceModel } from '../../models/device-model.model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  apiUrl: string = `${environment.apiUrl}/deviceModels`;

  constructor(private http: HttpClient) { }

  getModels() {
    return this.http.get<any>(`${this.apiUrl}/list`);
  }

  getModel(id: any) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addModel(model: DeviceModel) {
    return this.http.post<any>(`${this.apiUrl}/add`, model);
  }

  updateModel(model: DeviceModel) {
    return this.http.post<any>(`${this.apiUrl}/edit`, model);
  }


}
