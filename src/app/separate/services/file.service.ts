import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/shared/services/http-client.service';
import { environment } from 'src/environments/environment.prod';
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private httpClientService: HttpClientService, private httpClient: HttpClient,) { }

  public fileUploadGenericCall(
    controlerActionName : string,
    formData : FormData,
    index = 0,
    type = "post"
  ) {
    const apiUrl = environment.baseURL + controlerActionName;
    const headerss = new HttpHeaders({
      isFile: index.toString(),
      Container: type,
    });
    return this.httpClient
      .post(apiUrl, formData, {
        headers: headerss,
        reportProgress: true,
        observe: "events",
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
