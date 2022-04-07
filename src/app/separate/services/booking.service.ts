import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/shared/services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor( private httpClientService: HttpClientService) { }

  BookSlotRequest(requestBody: any){
    
    return this.httpClientService.post('Booking/BookSlotRequest', requestBody);
  }

  CreateBooking(requestBody: any){
    
    return this.httpClientService.post('Booking/CreateBooking', requestBody);
  }
}
