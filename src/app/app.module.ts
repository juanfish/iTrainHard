import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlanDevelopmentComponent } from './plan-development/plan-development.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WorkoutComponent } from './plan-development/workout/workout.component';
import { NutritionComponent } from './plan-development/nutrition/nutrition.component';
import { NutritionFactComponent } from './plan-development/nutrition-fact/nutrition-fact.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlanDevelopmentComponent,
    HomePageComponent,
    WorkoutComponent,
    NutritionComponent,
    NutritionFactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
