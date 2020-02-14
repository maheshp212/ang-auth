import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutUsComponent,
    PricingComponent,
    DashboardComponent,
    LoginComponent,
    LogoutComponent,
    NotfoundComponent,
    ProductComponent,
    UsersComponent,
    DashboardLayoutComponent,
    DefaultLayoutComponent
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
