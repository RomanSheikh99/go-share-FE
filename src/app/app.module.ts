import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CloudSvgComponent } from './cloud-svg/cloud-svg.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SingupPageComponent } from './pages/singup-page/singup-page.component';
// import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';
import { BookingComponent } from './pages/booking/booking.component';
import { BookingLocationComponent } from './components/booking-location/booking-location.component';
import { BookingCargoComponent } from './components/booking-cargo/booking-cargo.component';
import { SkipperIconComponent } from './utlt/skipper-icon/skipper-icon.component';
import { BookingReviewComponent } from './components/booking-review/booking-review.component';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { TimepickerModule } from 'ngx-bootstrap/timepicker';


@NgModule({
  declarations: [
    AppComponent,
    CloudSvgComponent,
    LoginPageComponent,
    SingupPageComponent,
    ProfileComponent,
    BookingComponent,
    BookingLocationComponent,
    BookingCargoComponent,
    SkipperIconComponent,
    BookingReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    // TimepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
