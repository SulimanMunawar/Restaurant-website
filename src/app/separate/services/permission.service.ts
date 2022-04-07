import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/shared/services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor( private httpClientService: HttpClientService) { }

  GetPermissions(){

    return this.httpClientService.get(
      '/Permissions/Getlist'
    );
  }

}
