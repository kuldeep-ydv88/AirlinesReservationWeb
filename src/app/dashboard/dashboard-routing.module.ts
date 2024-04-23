import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';


const routes: Routes = [
  {path:'',component:DashboardHomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'change-password',component:ChangePasswordComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
