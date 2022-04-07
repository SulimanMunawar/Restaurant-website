import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/shared/services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantBranchService {

  constructor(
    private httpClientService: HttpClientService
    ) {
      
     }

  getRestaurantBranchList(requestBody: any){
   debugger
    return this.httpClientService.get(
      'RestaurantBranch/GetResturantBranchList?pageNumber=' 
          + requestBody.currentPage 
          + '&pageSize=' + requestBody.itemsPerPage 
          + '&sparam=' + requestBody.sparam + '&lat=' 
          + requestBody.lat + '&lng=' 
          + requestBody.lng
      );
  }

  GetResturantBranchById(requestBody: any){
   
    return this.httpClientService.get(
      'RestaurantBranch/GetResturantBranchById?BranchId='+requestBody
    );
  }
}
