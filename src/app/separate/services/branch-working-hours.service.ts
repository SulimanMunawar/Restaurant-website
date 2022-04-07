import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/shared/services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class BranchWorkingHoursService {

  constructor(  private httpClientService: HttpClientService) { }

  getBranchHours(requestBody: any){

    return this.httpClientService.get(
      '/BranchWorkingHours/GetBranchHours?BranchId='+requestBody
      );
    

  }
}
