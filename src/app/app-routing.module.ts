import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './covida/home/home.component';
import { CalculadoraComponent } from './covida/calculadora/calculadora.component';
import { DashboardComponent } from './covida/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    component: HomeComponent,
    title: 'Covida - Página Inicial',
  },
  {
    path: 'calculadora',
    component: CalculadoraComponent,
    title: 'Covida - Calculadora',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Covida - Dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
