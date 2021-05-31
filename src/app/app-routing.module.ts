import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { race } from 'rxjs';
import { FinalPageComponent } from './final-page/final-page.component';
import { HomeComponent } from './home/home.component';
import { RaceComponent } from './race/race.component';
import { SuccessMockComponent } from './success-mock/success-mock.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'race', component: RaceComponent},
  {path: 'final-page', component: FinalPageComponent},
  {path: 'success', component: SuccessMockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
