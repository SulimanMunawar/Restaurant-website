import { Component, OnInit } from '@angular/core';
import { RelationInvitationService } from '../separate/services/relation-invitation.service';
import { AccountService } from '../shared/services/account.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor(private relationInvitationService: RelationInvitationService,private accountService: AccountService) {
    this.GetUserRelationProfiles();
    this.GetUserProfile();
   }

  profilesList: any[] = [];
  
  userProfile = {
    id: null,
    email: '',
    name: '',
    phoneNumber: '',
    address: '',
    picture:''
  }

  GetUserProfile(){
    
    this.accountService.GetUserProfile().subscribe((response)=>{
     this.userProfile = response.payload;

    })
  }


  GetUserRelationProfiles(){
    this.relationInvitationService.GetUserRelationProfiles().subscribe((response)=>{
      this.profilesList.push(...response.payload);
      console.log(this.profilesList)
    });
  }

  ngOnInit(): void {
    
  }




}
