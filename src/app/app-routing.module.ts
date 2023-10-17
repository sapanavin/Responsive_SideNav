import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CouponsComponent } from './coupons/coupons.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
 
  {path: 'dashboard', component:DashboardComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'statistics', component:StatisticsComponent},
  {path: 'coupons', component:CouponsComponent},
  {path: 'pages', component:PagesComponent},
  {path: 'settings', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
