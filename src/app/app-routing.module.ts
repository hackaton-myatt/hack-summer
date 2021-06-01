import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalPageComponent } from './final-page/final-page.component';
import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';
import { RaceComponent } from './race/race.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'race', component: RaceComponent},
  {path: 'success', component: FinalPageComponent},
  {path: 'offer', component: OfferComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
