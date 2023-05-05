import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material components
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// Page components
import { HomeComponent } from './pages/home/home.component';
import { MotorcycleComponent } from './pages/motorcycle/motorcycle.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { VisitUsComponent } from './pages/visit-us/visit-us.component';

//UI components
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    MotorcycleComponent,
    BudgetComponent,
    VisitUsComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
