import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { BookingService } from '../separate/services/booking.service';
import { Cart1Service } from '../separate/services/cart1.service';
import { EventEmitters } from '../shared/event/EventEmitters';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.scss']
})
export class CheckoutCartComponent implements OnInit {
  count: number = 0;
  CardPayment: boolean = false;
  COD: boolean = false;
  items: boolean = true;
  noItems: boolean = false;
  menuItems: any[]=[];

  quantity!: number;
  menuItem = {
    description: '',
    id: '',
    name: '',
    photo: '',
    price: 0,
    quantity: 0
  }
  perItemTotal: any[] = [];
  subTotal: number = 0;
  total: number = 0;
 
  constructor(private bookingService: BookingService,
    private cartService: Cart1Service
  ) {
   
    this.menuItems = JSON.parse(localStorage.getItem('MenuItems')as any);
    this.addons = JSON.parse(localStorage.getItem('Addons')as any);
    this.SlotId = JSON.parse(localStorage.getItem('SlotId') as any);
    console.log(this.menuItems);
    this.SubTotal();
    console.log(this.total);
   }

 refreshOrders!: false

  addons: any[] = [];

  SlotId!: '';
   allorders:[]=[];
  ngOnInit(): void {

    //this.menuItems = JSON.parse(localStorage.getItem('MenuItems')as any);
  }

  

  SubTotal(){

   this.subTotal = this.cartService.SubTotal();
   this.Total();
  }

  Total(){

    this.total = 0
    if(this.addons){
      this.addons.forEach(s=>this.total += (s.price*s.quantity)) as any;
      this.total +=this.subTotal;
    }
  }

  SubtractFromCart(i: number){
  
    if( this.menuItems[i].quantity == 0){
      this.menuItems[i].quantity = 0
    }else{
    this.menuItems[i].quantity -= 1;
    this.menuItem.id = this.menuItems[i].menuItemId;
    this.menuItem.name = this.menuItems[i].name;
    this.menuItem.description = this.menuItems[i].description;
    this.menuItem.price = this.menuItems[i].price;
    this.menuItem.photo = this.menuItems[i].photo;
    this.menuItem.quantity = this.menuItems[i].quantity;
    this.cartService.AddtoCart(-1,this.menuItem, this.addons);
    //this.ngOnInit();
    this.SubTotal();
  }
  }

  AddToCart(i: number){
    this.menuItems[i].quantity += 1;
    this.menuItem.id = this.menuItems[i].menuItemId;
    this.menuItem.name = this.menuItems[i].name;
    this.menuItem.description = this.menuItems[i].description;
    this.menuItem.price = this.menuItems[i].price;
    this.menuItem.photo = this.menuItems[i].photo;
    this.menuItem.quantity = this.menuItems[i].quantity;
  
    this.cartService.AddtoCart(1,this.menuItem, this.addons);
    this.ngOnInit();
    this.SubTotal();
  
  }


  checkoutBooking = {
    bookingItems: [],
    bookingItemAddons: [],
    bookSlotRequestId: '',
    totalAmount: 0,
    paymentMethod: 0
  }

  Checkout(){
    
    
    this.checkoutBooking.bookingItems = this.menuItems as any;
    this.checkoutBooking.bookingItemAddons = this.addons as any;
    this.checkoutBooking.bookSlotRequestId = this.SlotId;
    this.checkoutBooking.totalAmount = this.total;
    this.bookingService.CreateBooking(this.checkoutBooking).subscribe((response)=>{
      console.log(response.payload);
    })
  }

  onImgError(event: any){
    event.target.src = 'https://i.imgur.com/6oHix28.jpg'
   //Do other stuff with the event.target
   }

  add(item : any) {
    item.numberofitems++;
  }
  minus(item : any) {
    item.numberofitems--
  }


  cardPayment() {
    this.CardPayment = !this.CardPayment
  }
  CashOnDelivery() {
    this.COD = !this.COD
  }




}
