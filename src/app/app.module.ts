import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule, Pipe, PipeTransform} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExchangeService } from './services/exchange.service';
import { AssetTableComponent } from './asset-table/asset-table.component';
import { RemoveSmallPipe } from './Pipes/remove-small.pipe';
import { SumPipe } from './Pipes/sum.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AssetTableComponent,
    RemoveSmallPipe,
    SumPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [ ExchangeService ],
  bootstrap: [AppComponent]
})


export class AppModule { }
