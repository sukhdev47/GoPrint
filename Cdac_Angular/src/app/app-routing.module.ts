import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GallaryComponent } from './gallary/gallary.component';
import { FaqComponent } from './faq/faq.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UpdateUserDetailsComponent } from './update-user-details/update-user-details.component';
import { UpdateVendorDetailsComponent } from './update-vendor-details/update-vendor-details.component';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorOrdersComponent } from './vendor-orders/vendor-orders.component';
import { VendorsNearbyComponent } from './vendors-nearby/vendors-nearby.component';
import { WalletComponent } from './wallet/wallet.component';
import { RateexperienceComponent } from './rate-experience/rate-experience.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './auth.guard';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
      {path:'Home', component:HomeComponent},  
      {path:'AboutUs', component:AboutUsComponent},
      {path:'ContactUs',component:ContactUsComponent},
      {path:'FAQ', component:FaqComponent},
      {path:'Gallary',component:GallaryComponent},
      {path:'Register',component:RegisterComponent},    
  
  {
    path:'Home/User/:username',component:UserDashboardComponent,canActivate:[AuthGuard],
    children:
    [
      {path:'Wallet', component:WalletComponent},
      {path:'UpdateProfile', component:UpdateUserDetailsComponent},
      {path:'Vendors', component:VendorsNearbyComponent},
      {path:'Orders', component:UserOrdersComponent},
      {path:'Home',component:UserHomeComponent},
      {path:'Rate',component:RateexperienceComponent},
      {path:'Pricing', component:PricingComponent},
      {path:'', redirectTo:'Home', pathMatch:'full'}
    ]
  },
  {
    path:'Home/Vendor/:vendorname',component:VendorDashboardComponent,
    children:
    [
      {path:'Home', component:VendorHomeComponent},
      {path:'Wallet', component:WalletComponent},
      {path:'Rate',component:RateexperienceComponent},
      {path:'UpdateProfile', component:UpdateVendorDetailsComponent},
      {path:'Orders', component:VendorOrdersComponent},
      {path:'Pricing', component:PricingComponent},
      {path:"", redirectTo:'Home', pathMatch:'full'}
      
    ]
  },
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'**', component:ErrorPageComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes),
             HttpClientModule],            
  exports: [RouterModule],

})
export class AppRoutingModule { }

export const routingComponents=
[
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  RegisterComponent,
  AboutUsComponent,
  ContactUsComponent,
  ErrorPageComponent,
  GallaryComponent,
  FaqComponent,
  PaymentGatewayComponent,
  UserHomeComponent,
  UserDashboardComponent,
  UserOrdersComponent,
  UpdateUserDetailsComponent,
  UpdateVendorDetailsComponent,
  VendorHomeComponent,
  VendorDashboardComponent,
  VendorOrdersComponent,
  VendorsNearbyComponent,
  WalletComponent,
  RateexperienceComponent,
  LoginPageComponent,
  PricingComponent
];