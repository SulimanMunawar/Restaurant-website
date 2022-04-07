import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common'
import * as moment from 'moment';

@Component({
  selector: 'app-book-a-slot',
  templateUrl: './book-a-slot.component.html',
  styleUrls: ['./book-a-slot.component.scss']
})
export class BookASlotComponent implements OnInit {
 
  constructor(private fb: FormBuilder,
    public datepipe: DatePipe,) 
  {
    
  }
  
  bookSlotValues = {
    startTime: '',
    endTime: '',
    onDate: ''
  };
  
  ngOnInit(): void {
   
  }

  formateDate(bookSlotValues : any){
    this.bookSlotValues.endTime = moment(bookSlotValues.endTime,'h:mm a').format("YYYY-MM-DDTHH:mm:ss");
    this.bookSlotValues.startTime =  moment(bookSlotValues.startTime,'h:mm a').format("YYYY-MM-DDTHH:mm:ss");
    this.bookSlotValues.onDate =   moment(bookSlotValues.endTime,'YYYY-MM-DD').format("YYYY-MM-DDTHH:mm:ss");
  }


  setData(){
    localStorage.setItem('slotValues', JSON.stringify(this.bookSlotValues)); 
  }

  form = new FormGroup({
    startTime: new FormControl('', Validators.required),
    endTime:new FormControl('', Validators.required),
    onDate: new FormControl('',Validators.required),
  });

  submitForm(){
    
    this.bookSlotValues = this.form.value;
    this.formateDate(this.form.value);
    this.setData();
  }

    // Alert for booking after date and time confirmation 
    confirmBooking(){
      Swal.fire({
        title: 'Confirm Your Booking',
        text: 'You have booked a Table Successfully',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      }).then((result) => {
        if(result.value){
          Swal.fire(
            'Booking Confirmed',
            'Hoorray...! Your Booking has been Confirmed.',
            'success',
            )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Booking Cancelled',
            'We Will Miss You',
            'error',
          )
        }
      })
    }

}
