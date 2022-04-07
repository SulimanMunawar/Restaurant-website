import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientService } from './services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClientService: HttpClientService
  )
   {

   }

   Login(requestBody: any){
     return this.httpClientService.post('Authentication/LoginClient',requestBody);
   }

   Register(requestBody: any){
    return this.httpClientService.post('Account/Register',requestBody);
   }

   Logout(){
     return this.httpClientService.get('Authentication/Logout'); 
   }
}
