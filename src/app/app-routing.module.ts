import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { sideNavComponent } from './sideNav/sideNav.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search-flight',component:SearchFlightComponent},
  {path:'Registration',component:RegistrationComponent},
  {path:'about',component:AboutComponent},
  {path:'cutomer-login',component:CustomerLoginComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'contact-us',component:ContactUsPageComponent},
  {path: 'change-password',component:ChangePasswordComponent},
  {path:'toolbar',component:sideNavComponent},
  {
    path: 'dashboard',
    loadChildren: () => import('../app/dashboard/dashboard.module')
      .then(m => m.DashboardModule )
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
