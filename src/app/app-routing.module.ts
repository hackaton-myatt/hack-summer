import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { race } from 'rxjs';
import { FinalPageComponent } from './final-page/final-page.component';
import { HomeComponent } from './home/home.component';
import { RaceComponent } from './race/race.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'race', component: RaceComponent},
  {path: 'final-page', component: FinalPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
