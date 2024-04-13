import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentHomeComponent } from './payment-home/payment-home.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

const routes: Routes = [
  {path:'payment-home',component:PaymentHomeComponent},
  {path:'details',component:PaymentDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
