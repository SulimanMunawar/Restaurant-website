import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StripeCardService } from '../separate/services/stripe-card.service';
import * as moment from 'moment';
import { AccountService } from '../shared/services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  constructor(private cardService: StripeCardService,
              private accountService: AccountService,
              private toastrService: ToastrService) 
  { 
    this.GetUserCards();
    this.GetUserProfile();
  }
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


  cardForm= new FormGroup({
    expiryDate: new FormControl('', 
    [
      Validators.required,
      
    ]),
    
    number:  new FormControl('', 
    [
      Validators.required,
      Validators.minLength(16)
    ]),
    cvc: new FormControl('',
    [
      Validators.required
    ]),
    name: new FormControl('',
    [
      Validators.required
    ])
  });

  cardValues = {
    expMonth: 0,
    expYear: 0,
    number: 0,
    cvc: 0
  }

  MapData(){
    
    this.cardValues.cvc = this.cardForm.controls['cvc'].value;
    this.cardValues.number = this.cardForm.controls['number'].value;
    this.cardValues.expMonth = this.month;
    this.cardValues.expYear = this.year;
  }

  month!: number;
  year!:number;
  cardList: any[]=[];


  FormatDate(){

    this.month = moment(this.cardForm.controls['expiryDate'].value, 'YYYY MM').format("MM") as any;
    this.year = moment(this.cardForm.controls['expiryDate'].value, 'YYYY MM').format("YY") as any;
  }

  ngOnInit(): void {
   
  }


  StoreCreditCard(){
    if (this.cardForm.invalid)
    {
      this.cardForm.markAllAsTouched();
    }
    else
    {
    this.FormatDate();
    this.MapData();
    this.cardService.StoreCreditCard(this.cardValues).subscribe((response)=>{
        if(response.errorCode==0)
        {
        
          console.log(response.payload);
          this.toastrService.success("Card Added Successfully!");
        }
        else{
          this.toastrService.error("Error!");
        }
    
    });
  }
  }

  GetUserCards(){
    this.cardService.GetUserCards().subscribe((response=>{
      this.cardList.push(...response.payload)
    }))
  }

}
