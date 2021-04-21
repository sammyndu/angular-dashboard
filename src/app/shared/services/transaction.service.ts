import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseInfo } from '../models/response-info.model';
import { Terminal } from '../models/terminal.model';
import { TransactionDetail } from '../models/transaction-detail.model'
import { TransactionSearchQuery } from '../models/transaction-search-query.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

    apiUrl: string = `${environment.apiUrl}/transaction`;

    constructor(private http: HttpClient) { }

    getTransactionHistory() {
        return this.http.get<ResponseInfo>(`${this.apiUrl}/history`);
    }

    getTerminals() {
      return this.http.get<ResponseInfo>(`${this.apiUrl}/terminals`);
    }

    searchTransactions(query: TransactionSearchQuery){
      return this.http.post<ResponseInfo>(`${this.apiUrl}/search`, query)
    }

}
