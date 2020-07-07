import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PlanDevelopmentComponent } from './plan-development/plan-development.component';


const routes: Routes = [
  {path : '', component : HomePageComponent},
  {path : 'planDev', component : PlanDevelopmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
