import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RelationInvitationService } from '../separate/services/relation-invitation.service';

@Component({
  selector: 'app-invite-friend',
  templateUrl: './invite-friend.component.html',
  styleUrls: ['./invite-friend.component.scss']
})
export class InviteFriendComponent implements OnInit {

  constructor(private relationService: RelationInvitationService,
    private router: Router ) {
    this.GetUserForInvitaion();
    this.bookSlotId = JSON.parse(localStorage.getItem('SlotId') as any);

    this.restBranchId = JSON.parse(localStorage.getItem('BranchId') as any);
  }

  bookSlotId!: string;
  restBranchId!: '';

  usersList: any[] = [];

  bookSlotInvitations = {
    bookSlotRequestId: '',
    userId: {}
  }

  selectedUsers: any[] = [];


  GetUserForInvitaion() {
    this.relationService.GetUserForInvitation().subscribe((response) => {
      this.usersList = response.payload;
      console.log("Invite Friends List: ", this.usersList);
    });
  }

  SubmitUser() {
    this.bookSlotInvitations.bookSlotRequestId = this.bookSlotId;
    this.bookSlotInvitations.userId = this.selectedUsers;
    this.BookSlotInvitations();
    
  }

  ngOnInit(): void {
  }

  BookSlotInvitations(){
    
    this.relationService.BookSlotInvitations(this.bookSlotInvitations).subscribe((response)=> {
      this.goToMenu();
    });
  }

  goToMenu(){
    this.router.navigate(['/resturants-detail/'+this.restBranchId]);
  }

  onChange(id: string, isChecked: any) {
    isChecked = isChecked.target.checked;
  
    if (isChecked) {
      this.selectedUsers.push(id);
    } else {
      let index = this.selectedUsers.indexOf(id);
      this.selectedUsers.splice(index, 1);
    }
  }

}
