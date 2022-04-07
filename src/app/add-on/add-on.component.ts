import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddOnsService } from '../separate/services/add-ons.service';
import { Cart1Service } from '../separate/services/cart1.service';

@Component({
  selector: 'app-add-on',
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.scss']
})
export class AddOnComponent implements OnInit {


  constructor(private route: ActivatedRoute,
    private addonService: AddOnsService,
    private cartService1: Cart1Service
  ) {

    this.route.queryParams
      .subscribe(params => {
        this.mainMenu = JSON.parse(params['menu'])
        console.log(this.mainMenu);
      }
      );
    this.GetItemAddons();
  }

  mainMenu = {

    addonId: null,
    description: "",
    id: "",
    menuSectionId: "",
    menuSectionName: "",
    name: "",
    photo: "",
    price: 0
  };


  ngOnInit() {

  }

  menuItem = {
    menuItemId: '',
    quantity: 0,
    price: 0,
    description: '',
    name: '',
    photo: '',

  }


  isValue = true;

  itemAddOns: any[] = [];

  menuItemQuantity = 1;



  // Get Addons List
  GetItemAddons() {
    this.addonService.GetItemAddons(this.mainMenu.id).subscribe((response) => {
      for (let index = 0; index < response.payload.length; index++) {
        let element = response.payload[index];
        element.addonId = element.id;
      }

      this.itemAddOns.push(...response.payload);

    })
  }

  //Cart Item To Cart
  AddToCart() {

    this.cartService1.AddtoCart(this.menuItemQuantity, this.mainMenu,this.itemAddOns);
    this.menuItemQuantity = 0;
  }

  //Add Quantity For Single MenuItem
  AddQuantity() {
    
    if(this.isValue)
    {
      this.menuItemQuantity++; 
    }
    else{
      this.isValue = true;
      this.menuItemQuantity++
    }

  }

   //Subtract Quantity From Single MenuItem
  SubtractQuantity(){
    
    if(this.menuItemQuantity>0)
    this.menuItemQuantity=this.menuItemQuantity-1;
    if(this.menuItemQuantity == 0){
      this.isValue = false;
    }
  }


  //Set Addons for menuItem
  onChange(id: number, inc: number) {

    if (isNaN(this.itemAddOns[id].quantity)) {
      this.itemAddOns[id].quantity = 0

    }

    if (this.itemAddOns[id].quantity <= 0 && inc == -1) {
      this.itemAddOns[id].quantity = 0;

    } else {
      this.itemAddOns[id].quantity += inc
    }

  }
}
