import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResturantsComponent } from './resturants/resturants.component';
import { HomeComponent } from './home/home/home.component';
import { ResturantsDetailComponent } from './resturants-detail/resturants-detail.component';
import { ContactComponent } from './contact/contact.component';
import { BookASlotComponent } from './book-a-slot/book-a-slot.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { AddFamilyMemberComponent } from './add-family-member/add-family-member.component';
import { InviteFriendComponent } from './invite-friend/invite-friend.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddOnComponent } from './add-on/add-on.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { HelpComponent } from './help/help.component';
import { AddCardComponent } from './add-card/add-card.component';
import { CardErrorComponent } from './card-error/card-error.component';
import { VerifyEmailComponent } from './verify-email/verify-email/verify-email.component';
import { AllergenceComponent } from './allergence/allergence.component';
import { CreatePartnerProfileComponent } from './create-partner-profile/create-partner-profile.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { EmailVerifiedSuccessComponent } from './email-verified-success/email-verified-success.component';
import { VerifyMobileComponent } from './verify-mobile/verify-mobile.component';
import { MobileVerificationComponent } from './mobile-verification/mobile-verification.component';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';
import { OrderFailComponent } from './order-fail/order-fail.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PaymentComponent } from './payment/payment.component';
import { DietaryComponent } from './dietary/dietary.component';
import { AllergensComponent } from './allergens/allergens.component';
import { SettingsComponent } from './settings/settings.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  { path: 'resturants', component: ResturantsComponent},
  { path: 'resturants-detail', component: ResturantsDetailComponent },
  {path: 'resturants-detail/:id', component: ResturantsDetailComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'book-a-slot', component: BookASlotComponent },
  { path: 'payment-method', component: PaymentMethodComponent },
  { path: 'add-family', component: AddFamilyMemberComponent },
  { path: 'invite-friends', component: InviteFriendComponent },
  { path: 'checkout', component: CheckoutCartComponent},
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'add-ons', component: AddOnComponent },
  { path: 'dashboard', component: UserDashboardComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'create-profile', component: CreateProfileComponent },
  { path: 'help', component: HelpComponent },
  { path: 'add-card', component: AddCardComponent },
  { path: 'card-error', component: CardErrorComponent },
  { path: '', redirectTo: '', pathMatch: 'full', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'verify-email', component: VerifyEmailComponent},
  {path: 'verify-email/:id', component: VerifyEmailComponent},
  {path: 'verify-email/:id/:email', component: VerifyEmailComponent},
  {path: 'allergence', component: AllergenceComponent},
  {path: 'dietary', component: DietaryComponent},
  {path: 'create-partner-profile', component: CreatePartnerProfileComponent},
  {path: 'email-verification', component: EmailVerificationComponent},
  {path: 'email-verified', component: EmailVerifiedSuccessComponent},
  {path: 'verify-mobile', component: VerifyMobileComponent},
  {path: 'mobile-verification', component: MobileVerificationComponent},
  {path: 'order-fail', component: OrderFailComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'allergens', component: AllergensComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'privacy', component: PrivacyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
