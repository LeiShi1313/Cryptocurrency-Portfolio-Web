import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Asset, Price } from '../types';
import { Config } from './config';
import {ObjectUnsubscribedError} from "rxjs";

@Injectable()
export class ExchangeService {
  private server_url = Config.server_url;
  constructor(
    private http: HttpClient
  ) { }

  getBalance(name: string): Observable<Asset[]> {
    const url = `${this.server_url}/${name}/balance`;
    return this.http.get<Asset[]>(url);
  }

  getBTCPrice(name: string): Observable<Price> {
    const url = `${this.server_url}/${name}/ticker/btc_usdt`;
    return this.http.get<Price>(url);
  }

  getPairPrice(name: string, coin1: string, coin2: string): Observable<Price> {
    const url = `${this.server_url}/${name}/ticker/${coin1.toLowerCase()}_${coin2.toLowerCase()}`;
    return this.http.get<Price>(url);
  }

  ngOnInit() {
  }
}
