import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VisitUsComponent } from './pages/visit-us/visit-us.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { MotorcycleComponent } from './pages/motorcycle/motorcycle.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent 
    },
    {
      path: 'home',
      component: HomeComponent 
    },
    {
      path: 'motorcycles',
      component: MotorcycleComponent 
    },
    {
      path: 'budget',
      component: BudgetComponent 
    },
    {
      path: 'visit',
      component: VisitUsComponent 
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
