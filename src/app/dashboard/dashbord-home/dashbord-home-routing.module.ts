import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMainComponent } from '../dashboard-main/dashboard-main.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';

const routes: Routes = [
  {path:'main',component:DashboardMainComponent},
  {path:'change/password',component:ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordHomeRoutingModule { }


