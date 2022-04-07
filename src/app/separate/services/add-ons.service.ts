import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/shared/services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AddOnsService {

  constructor(private httpClientService: HttpClientService) { }

  GetItemAddons(requestBody: any){
    return this.httpClientService.get(
      'Addon/GetItemAddons?ItemId='+requestBody
      );
    
  }
}
