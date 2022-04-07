import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/shared/services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class RelationInvitationService {

  constructor(private httpClientService: HttpClientService) { }


  GetUserForInvitation(){

    return this.httpClientService.get(
      '/RelationInvitaion/SearchUserForInvitaion'
    );
  }

  BookSlotInvitations(requestBody: any){
    return this.httpClientService.post('Booking/BookSlotInvitaions', requestBody);
  }

  GetUserRelationProfiles(){
    
    return this.httpClientService.get('RelationInvitaion/GetUserRelationsProfiles');
  }
}
