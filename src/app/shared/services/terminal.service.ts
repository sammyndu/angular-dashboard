import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseInfo } from '../models/response-info.model';
import { TerminalAddFormInfo } from '../models/terminal-add-form-info.model';
import { Terminal } from '../models/terminal.model';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  apiUrl: string = `${environment.apiUrl}/terminal`;

  constructor(private http: HttpClient) { }

  getTerminals() {
    return this.http.get<any>(`${this.apiUrl}/list`);
  }

  getAddFormInfo() {
    return this.http.get<TerminalAddFormInfo>(`${this.apiUrl}/forminfo`);
  }
}
