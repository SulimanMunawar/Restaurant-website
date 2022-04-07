import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClientService: HttpClientService) { }

  GetUserProfile(){
    return this.httpClientService.get('Account/GetUserProfile');
  }

  RegisterUser(requestBody: any){
    return this.httpClientService.post('Account/Register',requestBody);
  }

  UpdateUser(requestBody: any){
   
    return this.httpClientService.post('Account/UpdateUser',requestBody);
  }

  SendVerificationEmail(Id: any, email: any){

    return this.httpClientService.get('Account/SendVerificationEmail?Id='+ Id + '&email=' + email);
  }

  VerifyEmailAddressAsync(requestBody: any){
    return this.httpClientService.post('Account/VerifyEmailAddressAsync',requestBody);
  }

  SendVerficationSMS(requestBody: any){
    return this.httpClientService.get('Account/SendVerficationSMSl?Id='+ requestBody.Id + '&email=' + requestBody.phonenumber);
  }

  VerifyMobileAsync(requestBody:any)
  {
    return this.httpClientService.post('Account/VerifyMobileAsync',requestBody);
  }


  GetUserAllergens(){
    return this.httpClientService.get('Account/GetUserAllergens');
  }

  UpdateUserAllergens(requestBody: any){
    return this.httpClientService.post('Account/UpdateUserAllergens',requestBody);
  }

  UpdateUserDietary(requestBody: any){
    return this.httpClientService.post('Account/UpdateUserDietary',requestBody);
  }

  GetUserAllergensDietary(){
    return this.httpClientService.get('Account/GetUserAllergensDietary');
  }

  GetUserDietary(){
    return this.httpClientService.get('Account/GetUserDietary');
  }

}
