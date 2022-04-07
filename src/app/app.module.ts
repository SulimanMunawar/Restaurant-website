import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule,AlertConfig } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { PaginationModule,PaginationConfig } from 'ngx-bootstrap/pagination';
import { PopoverModule, PopoverConfig } from 'ngx-bootstrap/popover';
import { ProgressbarModule,ProgressbarConfig } from 'ngx-bootstrap/progressbar';
import { RatingModule, RatingConfig } from 'ngx-bootstrap/rating';
import { SortableModule, DraggableItemService } from 'ngx-bootstrap/sortable';
import { TabsModule, TabsetConfig } from 'ngx-bootstrap/tabs';
import { ResturantsComponent } from './resturants/resturants.component';
import { ResturantsDetailComponent } from './resturants-detail/resturants-detail.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ContactComponent } from './contact/contact.component';
import { BookASlotComponent } from './book-a-slot/book-a-slot.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';
import { DatePipe } from '@angular/common';
import { AddFamilyMemberComponent } from './add-family-member/add-family-member.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { InviteFriendComponent } from './invite-friend/invite-friend.component';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AddOnComponent } from './add-on/add-on.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { HelpComponent } from './help/help.component';
import { AddCardComponent } from './add-card/add-card.component';
import { CardErrorComponent } from './card-error/card-error.component';
import { HttpResponseInterceptor } from './auth/interceptor/http.interceptor';
import { RegisterComponent } from './register/register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email/verify-email.component';
import { AllergenceComponent } from './allergence/allergence.component';
import { DietaryComponent } from './dietary/dietary.component';
import { CreatePartnerProfileComponent } from './create-partner-profile/create-partner-profile.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { EmailVerifiedSuccessComponent } from './email-verified-success/email-verified-success.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { VerifyMobileComponent } from './verify-mobile/verify-mobile.component';
import { MobileVerificationComponent } from './mobile-verification/mobile-verification.component';
import { OrderFailComponent } from './order-fail/order-fail.component';
import { PaymentComponent } from './payment/payment.component';
import { AllergensComponent } from './allergens/allergens.component';
import { SettingsComponent } from './settings/settings.component';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    ResturantsDetailComponent,
    ResturantsComponent,
    ContactComponent,
    BookASlotComponent,
    PaymentMethodComponent,
    AddFamilyMemberComponent,
    InviteFriendComponent,
    CheckoutCartComponent,
    OrderSuccessComponent,
    LoginComponent,
    RegisterComponent,
    SignupComponent,
    ForgotPasswordComponent,
    AddOnComponent,
    UserDashboardComponent,
    MyProfileComponent,
    CreateProfileComponent,
    HelpComponent,
    AddCardComponent,
    CardErrorComponent,
    VerifyEmailComponent,
    AllergenceComponent,
    DietaryComponent,
    CreatePartnerProfileComponent,
    EmailVerificationComponent,
    EmailVerifiedSuccessComponent,
    MainMenuComponent,
    VerifyMobileComponent,
    MobileVerificationComponent,
    OrderFailComponent,
    PaymentComponent,
    AllergensComponent,
    SettingsComponent,
    PrivacyComponent
  ],
  imports: [
    SimpleNotificationsModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AccordionModule,
    AlertModule,
    ButtonsModule,
    CarouselModule,
    CollapseModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule,
    PaginationModule,
    PopoverModule,
    ProgressbarModule,
    RatingModule,
    SortableModule,
    TabsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
     
      preventDuplicates: true,
      timeOut: 1400,
    }),
    NgxPaginationModule
  ],
  
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpResponseInterceptor,
      multi: true,
    },
    AlertConfig, 
    BsDatepickerConfig, 
    BsDropdownConfig,
    PaginationConfig,
    ProgressbarConfig,
    RatingConfig,
    DraggableItemService,
    DatePipe,
    TabsetConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
