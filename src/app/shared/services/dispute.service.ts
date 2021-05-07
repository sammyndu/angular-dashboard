import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DisputeStatus } from '../models/dispute-status.model';
import { DisputeType } from '../models/dispute-type';
import { Dispute } from '../models/dispute.model';
import { ResponseInfo } from '../models/response-info.model';

@Injectable({
  providedIn: 'root'
})
export class DisputeService {

  apiUrl: string = `${environment.apiUrl}/dispute`;

  constructor(private http: HttpClient) { }

  getDisputes() {
    return this.http.get<Dispute[]>(`${this.apiUrl}/list`)
  }

  getDispute(id: number) {
    return this.http.get<ResponseInfo>(`${this.apiUrl}/${id}`)
  }

  getDisputeTypes() {
    return this.http.get<DisputeType[]>(`${this.apiUrl}/getTypes`)
  }

  getDisputeStatus() {
    return this.http.get<DisputeStatus[]>(`${this.apiUrl}/getStatus`)
  }

  editDispute(dispute: Dispute) {
    return this.http.post<ResponseInfo>(`${this.apiUrl}/edit`, dispute)
  }

  addDispute(dispute: Dispute) {
    return this.http.post<ResponseInfo>(`${this.apiUrl}/add`, dispute)
  }

}
