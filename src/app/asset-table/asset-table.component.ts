import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../services/exchange.service';
import { Observable } from 'rxjs';

import { Asset, Assets, Exchanges, Sums } from '../types';

@Component({
  selector: 'app-asset-table',
  templateUrl: './asset-table.component.html',
  styleUrls: ['asset-table.component.css'],
})
export class AssetTableComponent implements OnInit {
  assets: Assets = {};
  sums: Sums = {};
  total = 0.0;
  exchanges = Exchanges;

  constructor(
    private exchangeService: ExchangeService) { }

  ngOnInit() {
    for (const name of this.exchanges) {
      this.sums[name] = 0.0;
      this.getBalance(name);
    }

  }

  getBalance(name: string): void {
    this.exchangeService.getBalance(name)
      .subscribe(assets => {
        console.log(assets);
        this.assets[name] = assets;
        Observable
          .interval(5 * 60 * 1000)
          .startWith(0)
          .timeInterval()
          .flatMap(() => this.exchangeService.getBTCPrice(name))
          .subscribe(btc_price => {
            this.sums[name] = 0.0;
            for (const asset of this.assets[name]) {
              if (asset.symbol === 'USDT') {
                asset['price'] = asset.amount;
                this.sums[name] = Number(this.sums[name]) + Number(asset['price']);
                this.total = Object.values(this.sums).reduce((a, b) => a + b);
              } else if (asset.symbol === 'BTC') {
                asset['price'] = Number(asset.amount) * Number(btc_price['price']);
                this.sums[name] = Number(this.sums[name]) + Number(asset['price']);
                this.total = Object.values(this.sums).reduce((a, b) => a + b);
              } else {
                asset['price'] = 0.0;
                this.exchangeService.getPairPrice(name, asset.symbol, 'btc')
                  .subscribe(
                    price => {
                      asset['price'] = Number(asset.amount) * Number(price['price']) * Number(btc_price['price']);
                      this.sums[name] = Number(this.sums[name]) + Number(asset['price']);
                      this.total = Object.values(this.sums).reduce((a, b) => a + b);
                    },
                    () => {
                      this.exchangeService.getPairPrice(name, asset.symbol, 'usdt')
                        .subscribe(
                          price => {
                            asset['price'] = Number(asset.amount) * Number(price['price']);
                            this.sums[name] = Number(this.sums[name]) + Number(asset['price']);
                            this.total = Object.values(this.sums).reduce((a, b) => a + b);
                          },
                          () => {
                            asset['price'] = 0.0;
                          }
                      );
                    }
                  );
              }
            }
          });
      });
  }

}

