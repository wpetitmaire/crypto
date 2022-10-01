import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { CoinbaseApi } from './model/coinbase.api';

@Injectable({
  providedIn: 'root'
})
export class CoinbaseService {

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<CoinbaseApi.accounts> {
    return this.http.get<CoinbaseApi.accounts>('http://localhost:8081/api/accounts?refresh=true');
  }
}
