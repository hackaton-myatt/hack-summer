import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RaceComponent } from './race/race.component';
import { FinalPageComponent } from './final-page/final-page.component';
import { SuccessMockComponent } from './success-mock/success-mock.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    RaceComponent,
    FinalPageComponent,
    SuccessMockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
