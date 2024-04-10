import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordHomeRoutingModule } from './dashbord-home-routing.module';
import { ChangePasswordComponent } from './../../dashboard/dashbord-home/dashbord-home-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChangePasswordComponent,

    
  ],
  imports: [
    CommonModule,
    DashbordHomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule


  ]
})
export class DashbordHomeModule { }
