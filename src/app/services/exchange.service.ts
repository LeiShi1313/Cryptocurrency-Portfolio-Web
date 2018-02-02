import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Asset, Price } from '../types';

@Injectable()
export class ExchangeService {
  private server_url = environment.apiEndPoint;
  constructor(
    private http: HttpClient
  ) { }

  getBalance(name: string): Observable<Asset[]> {
    const url = `${this.server_url}/balance/${name}`;
    return this.http.get<Asset[]>(url);
  }

  getBTCPrice(name: string): Observable<Price> {
    const url = `${this.server_url}/ticker/${name}/btc_usdt`;
    return this.http.get<Price>(url);
  }

  getPairPrice(name: string, coin1: string, coin2: string): Observable<Price> {
    const url = `${this.server_url}/ticker/${name}/${coin1.toLowerCase()}_${coin2.toLowerCase()}`;
    return this.http.get<Price>(url);
  }

}
