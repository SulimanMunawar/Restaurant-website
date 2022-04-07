import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/shared/services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(  private httpClientService: HttpClientService) { }

  GetBranchUserReviewsById(id: string, requestBody: any){

    return this.httpClientService.get(
      '/BranchReview/GetBranchUserReviewsById?BranchId='+ id + '&pagesize='+ requestBody.itemsPerPage+'&pagenumber='+requestBody.currentPage   
    );
  }
}
