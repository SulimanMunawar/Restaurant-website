import { Component, OnInit, Input } from '@angular/core';

import { BookingService } from '../separate/services/booking.service';
import { PermissionService } from '../separate/services/permission.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {

 
  constructor(private permissionService: PermissionService,
    private bookingService: BookingService) 
  { 
    this.slotValues = JSON.parse(localStorage.getItem('slotValues') as any);
     this.getPermission();
   

  }

  BookingSlotValues = {
    startTime: '',
    endTime: '',
    bookingDate: '',
    permissionsType: ''
  }
  slotValues = {
    startTime: '',
    endTime: '',
    onDate: ''
  };
  bookSlotId= '';
  permissions: any[] = [];
  permissionsType: string = "";
  
  ngOnInit(): void {
  }

  getPermission(){

    this.permissionService.GetPermissions().subscribe((response)=>{
      this.permissions = response.payload;
      console.log(this.permissions)
     
    });
    
  }

  SubmitData(){

    this.BookingSlotValues.permissionsType = this.permissionsType;
    this.BookingSlotValues.startTime = this.slotValues.startTime;
    this.BookingSlotValues.endTime = this.slotValues.endTime;
    this.BookingSlotValues.bookingDate = this.slotValues.onDate;
    this.bookingService.BookSlotRequest(this.BookingSlotValues).subscribe((response)=>{
    this.bookSlotId = response.payload;
      localStorage.setItem('SlotId', JSON.stringify(this.bookSlotId));
        });
  }

}
