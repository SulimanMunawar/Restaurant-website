import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/shared/services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor( private httpClientService: HttpClientService) { }

  GetMenuSection(id: string){

    return this.httpClientService.get(
      '/MenuItem/GetMenuItemListBySection?BranchId='+ id   
    );
  }

}
