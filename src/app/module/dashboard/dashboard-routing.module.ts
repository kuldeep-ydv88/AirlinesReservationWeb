import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

const routes: Routes = [
  {path:'',component:DashboardHomeComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
