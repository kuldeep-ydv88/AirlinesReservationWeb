import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentHomeComponent } from './payment-home/payment-home.component';


@NgModule({
  declarations: [
    PaymentDetailsComponent,
    PaymentHomeComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
