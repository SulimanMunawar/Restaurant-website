import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class Cart1Service {

  constructor(private toastrService: ToastrService) {
    
    this.menuItemList = JSON.parse(localStorage.getItem('MenuItems') as any);
    this.menuItemList = [];

   }

  menuItemList: any[] = [];
  addonsList: any[] = [];

  exsistingMenuItems: any[] = [];  
  subTotal: number = 0;

  menuItem = {
    menuItemId: '',
    quantity: 0,
    price: 0,
    description: '',
    name: '',
    photo: '',

  }

  MapData(obj: any, num: number) {
    this.menuItem.menuItemId = obj.id;
    this.menuItem.name = obj.name;
    this.menuItem.price = obj.price;
    this.menuItem.photo = obj.photo;
    this.menuItem.description = obj.description;
    this.menuItem.quantity = num;
  }

  GetLocalStorage() {

    this.exsistingMenuItems = JSON.parse(localStorage.getItem('MenuItems') as any);
  }

  SetLocalStorage() {
    
    localStorage.setItem('MenuItems', JSON.stringify(this.menuItemList.filter(c => c.quantity > 0)));
    localStorage.setItem('Addons', JSON.stringify(this.addonsList.filter(c => c.quantity > 0)));
    
  }

  GetAllOrders(){
    return this.menuItemList;
  }



  AddtoCart(inc: number, menuItemObj: any, addonObj: any) {
 
    this.addonsList = addonObj;
    this.GetLocalStorage();
    const productExits = this.isAddedMenuItemToCart(menuItemObj.id, inc);
    //this.menuItemList = [];

    if (!productExits) {
      this.MapData(menuItemObj, inc);

   
      if (this.exsistingMenuItems && this.exsistingMenuItems.length) {
        this.menuItemList = [];
        this.menuItemList.push(...this.exsistingMenuItems);
      }      
        this.menuItemList.push(this.menuItem);
        this.toastrService.success("Item Added To Cart!");

        this.SetLocalStorage();
    }
 

  }

  isAddedMenuItemToCart(productId: any, inc: number): boolean {

    for (let i in this.menuItemList) {
      if (this.menuItemList[i].menuItemId == productId) {
        
        this.menuItemList[i].quantity = this.menuItemList[i].quantity + (inc);
        if(inc == -1){
          this.toastrService.success("Item Deleted!");
        }
        else
        {
          this.toastrService.success("Item Added To Cart!");
        }
        this.SetLocalStorage();
        return true;
      }

      
    }
    return false;
  }

  SubTotal(): number {
 
    this.subTotal=0;
    this.menuItemList = JSON.parse(localStorage.getItem('MenuItems') as any);
    if(this.menuItemList)
    this.menuItemList.forEach(s=>this.subTotal += (s.price*s.quantity)) 
    return this.subTotal;
   }

}
