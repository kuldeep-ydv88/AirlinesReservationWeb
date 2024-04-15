import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordHomeRoutingModule } from './dashbord-home-routing.module';
import { ChangePasswordComponent } from './../change-password/change-password.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { AddFlightComponent } from '../add-flight/add-flight.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';



@NgModule({
  declarations: [
    ChangePasswordComponent,
    ToolbarComponent,
    AddFlightComponent,
  ],
  imports: [
    CommonModule,
    DashbordHomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule
  ]
})
export class DashbordHomeModule {
}
export { ToolbarComponent };

