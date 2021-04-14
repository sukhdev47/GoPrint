import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GallaryComponent } from './gallary/gallary.component';
import { FaqComponent } from './faq/faq.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UpdateUserDetailsComponent } from './update-user-details/update-user-details.component';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorOrdersComponent } from './vendor-orders/vendor-orders.component';
import { VendorsNearbyComponent } from './vendors-nearby/vendors-nearby.component';
import { WalletComponent } from './wallet/wallet.component';
import { RateexperienceComponent } from './rate-experience/rate-experience.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserServiceService } from './user-service.service';
import { AuthGuard } from './auth.guard';
import { UpdateVendorDetailsComponent } from './update-vendor-details/update-vendor-details.component';
import { VendorFull } from './vendor-full';
import { OrderClass } from './order-class';
import { User } from './user';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [   
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    RegisterComponent,
    ErrorPageComponent,
    GallaryComponent,
    FaqComponent,
    PaymentGatewayComponent,
    UserHomeComponent,
    UserDashboardComponent,
    UserOrdersComponent,
    UpdateUserDetailsComponent,
    VendorHomeComponent,
    VendorDashboardComponent,
    VendorOrdersComponent,
    VendorsNearbyComponent,
    WalletComponent,
    RateexperienceComponent,
    LoginPageComponent,
    routingComponents,
    UpdateVendorDetailsComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserServiceService,AuthGuard,User,VendorFull,OrderClass],
  bootstrap: [AppComponent]
})
export class AppModule { }


