import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  constructor(private accountServce: AccountService,
    private route: ActivatedRoute,) { }

    verifyEmailForm = new FormGroup({
      email: new FormControl('')
    });


    verifyEmail= {
      Id: '',
      email: ''
    }

    Id!: '';
    Email!: ""
  

  ngOnInit(): void {
   
    this.Id = this.route.snapshot.params['id'];
   
    // this.verifyEmail.email = this.route.snapshot.params['email'];
    // this.verifyEmail.Id = this.route.snapshot.params['id'];
  }

  SendVerficationEmail(){
   
    this.Email = this.verifyEmailForm.controls['email'].value;
    this.accountServce.SendVerificationEmail(this.Id, this.Email).subscribe((response)=>{
      
    });
  }

 

}
