import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/shared/services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class StripeCardService {

  constructor(private httpClientService: HttpClientService) { }

  StoreCreditCard(requestBody: any){
    return this.httpClientService.post('Stripe/StoreCreditCard',requestBody);
  }

  GetUserCards(){
    return this.httpClientService.get('Stripe/GetUserCards');
  }
}
