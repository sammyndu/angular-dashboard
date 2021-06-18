import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DeviceModel } from '../../models/device-model.model';
import { ResponseInfo } from '../../models/response-info.model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  apiUrl: string = `${environment.apiUrl}/deviceModels`;

  constructor(private http: HttpClient) { }

  getModels() {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/list`);
  }

  getModel(id: any) {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/${id}`);
  }

  addModel(model: DeviceModel) {
    return this.http.post<ResponseInfo>(`${this.apiUrl}/add`, model);
  }

  updateModel(model: DeviceModel) {
    return this.http.post<ResponseInfo>(`${this.apiUrl}/edit`, model);
  }


}
