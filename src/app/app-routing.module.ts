import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { FeedbackComponent } from './feedback/feedback.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
// import { ChangePasswordComponent } from './dashboard/change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { MyBookingComponent } from './my-booking/my-booking.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search-flight',component:SearchFlightComponent},
  {path:'Registration',component:RegistrationComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'cutomer-login',component:CustomerLoginComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'contact-us',component:ContactUsPageComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'user/profile',component:ProfileComponent},
  {path:'my-booking',component:MyBookingComponent},
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashbord-home/dashbord-home.module')
      .then(m => m.DashbordHomeModule)
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
