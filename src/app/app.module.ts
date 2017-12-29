import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule, Pipe, PipeTransform} from '@angular/core'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from "./services/hero.service";
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExchangeService } from './services/exchange.service';
import { AssetTableComponent } from './asset-table/asset-table.component';
import { RemoveSmallPipe } from './Pipes/remove-small.pipe';
import { SumPipe } from './Pipes/sum.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
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
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [ HeroService, MessageService, ExchangeService ],
  bootstrap: [AppComponent]
})


export class AppModule { }
