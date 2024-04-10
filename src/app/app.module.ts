import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AboutComponent } from './about/about.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NavbarComponent } from './navbar/navbar.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { ProfileComponent } from './profile/profile.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SearchFlightComponent,
    CustomerLoginComponent,
    RegistrationComponent,
    ContactComponent,
    FeedbackComponent,
    NavbarComponent,
    ContactUsPageComponent,
    AdminDashboardComponent,
    ProfileComponent,
    ToolbarComponent,
    MyBookingComponent,
    DashboardMainComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
