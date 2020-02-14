import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PricingComponent } from './pricing/pricing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import {AuthGuard} from './auth.guard'
import {NoauthGuard} from './noauth.guard'


const routes: Routes = [
  {path:'', component:DefaultLayoutComponent,canActivate:[NoauthGuard], children:[
    {path:'contact', component:ContactComponent},
    {path:'about', component:AboutUsComponent},
    {path:'login', component:LoginComponent},
  ]},
  {path:'', component:DashboardLayoutComponent, canActivate:[AuthGuard], children:[
    {path:'dashboard', component:DashboardComponent},
    {path:'users', component:UsersComponent},
    {path:'price', component:PricingComponent},
  ]},
  {path:'logout',component:LogoutComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
