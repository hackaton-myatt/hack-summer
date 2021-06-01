import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RaceComponent } from './race/race.component';
import { FinalPageComponent } from './final-page/final-page.component';
import { SuccessMockComponent } from './success-mock/success-mock.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OfferComponent } from './offer/offer.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    RaceComponent,
    FinalPageComponent,
    SuccessMockComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
