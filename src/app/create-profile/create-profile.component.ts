import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {
  
  partnerform: boolean = false;
  selectedProfile: string ="";

  selectChangeHandler(event:any){
    this.selectedProfile = event.target.value;
    console.log(this.selectedProfile);
  }
  showPartnerForm(){
    this.partnerform = !this.partnerform;
    console.log(this.partnerform);
  }

  constructor() { }
 

  ngOnInit(): void {
  }

}
