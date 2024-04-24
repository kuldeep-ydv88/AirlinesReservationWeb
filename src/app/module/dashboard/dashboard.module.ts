import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    ProfileComponent,
    DashboardHomeComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class DashboardModule { }
