import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment.prod';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient,
    private ngxSpinnerService: NgxSpinnerService,
    private toastrService: ToastrService
  ) { }

  post(url: string, requestBody: any) {
  
    this.ngxSpinnerService.show();
    return this.httpClient.post(environment.baseURL + url, requestBody).pipe(
      map((response: any) => {
        this.ngxSpinnerService.hide();
        if (response.status === 'Success') return response;
        else {
          this.toastrService.warning(response.message);
          return response;
        }
      }),

    );
  }

  get(url: string) {
    if(url!="Authentication/Me")
    this.ngxSpinnerService.show();
    return this.httpClient.get(environment.baseURL + url).pipe(
      map((response: any) => {
        this.ngxSpinnerService.hide();
        if (response.status === 'Success') return response;
        else {
          this.toastrService.warning(response.message);
          return null;
        }
      }),
    );
  }
}
  