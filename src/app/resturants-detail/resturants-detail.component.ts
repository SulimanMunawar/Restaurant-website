import { Component, OnInit, } from '@angular/core';
import { DatePipe } from '@angular/common'
import { NotificationsService } from 'angular2-notifications';
import Swal from 'sweetalert2';
import { RestaurantBranchService } from '../separate/services/restaurant-branch.service';
import { ToastrService } from 'ngx-toastr';
import { PaginationService } from '../shared/services/pagination.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BranchWorkingHoursService } from '../separate/services/branch-working-hours.service';
import { ReviewsService } from '../separate/services/reviews.service';
import { MenuService } from '../separate/services/menu.service';
import { Cart1Service } from '../separate/services/cart1.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-resturants-detail',
  templateUrl: './resturants-detail.component.html',
  styleUrls: ['./resturants-detail.component.scss']
})
export class ResturantsDetailComponent implements OnInit {

  currentStep: number = 1;
  status: string = 'logout';
  initialVal: number = 0;

  constructor(private service: NotificationsService,
    private restaurantBranchService: RestaurantBranchService,
    private toastr: ToastrService,
    public paginationService: PaginationService,
    private branchWorkingHoursService: BranchWorkingHoursService,
    private route: ActivatedRoute,
    public datepipe: DatePipe,
    private reviewsService: ReviewsService,
    private menuService: MenuService,
    private router: Router,
    private cartService: Cart1Service
  ) {
    this.paginationService.branchReviewsConfig.currentPage = 1;
    this.userValues = JSON.parse((localStorage.getItem("User") as any));
    console.log("User Values", this.userValues);
    this.slotId = JSON.parse(localStorage.getItem('SlotId') as any);

  }
  fetchMore = {
    menu: true,
    reviews: true
  };

  slotId!: '';
  menuItem = {
    addonId: null,
    description: '',
    id: '',
    name: '',
    photo: '',
    price: 0
  };
  userValues: any[] = [];
  selectedTab = "";
  fetching = false;
  branchWorkingHours: any[] = [];

  public branchId!: '';

  ngOnInit(): void {

    let that = this;

    window.onscroll = function (ev) {
      if (((window.innerHeight + window.scrollY) / document.body.offsetHeight) > 0.8 && that.fetching == false && that.selectedTab == 'reviews') {
        that.GetBranchUserReviewsById();
      }
    };

    this.branchId = this.route.snapshot.params['id'];
    this.getRestaurantBranchById();
    this.getBranchHours();
    this.GetMenuItemListBySection();
    //this.GetBranchUserReviewsById();
  }
  ngOnDestroy(): void {
    window.onscroll = null;
  }

  menuItems = {
    description: '',
    menuItemId: '',
    name: '',
    photo: '',
    price: 0,
    quantity: 0
  };
  menuItemsList: any[]=[];
 addons: any[]=[];

  branchMenus: any[] = [];
  branchReviews: any[] = [];

  restBranch = {
    branRevCount: '',
    chefDescription: '',
    chefImg: '',
    chefName: '',
    chefRating: '',
    chefRevCount: '',
    createdAt: '',
    distance: '',
    imageUrl: '',
    isfavourite: '',
    name: '',
    rating: '',
    restaurantDescription: ''
  };

  onSuccess(message: any) {
    this.service.success('Success', message, {
      position: ['bottom', 'right'],
      timeOut: 2000,
      animate: 'fade',
      showProgressBar: true

    })
  }

  openSweetAlert() {
    Swal.fire({
      title: 'Confirm Your Booking',
      text: 'You have booked a Table Successfully',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
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

  getRestaurantBranchById() {

    this.restaurantBranchService.GetResturantBranchById(this.branchId)
      .subscribe((response) => {

        this.restBranch = response.payload;
        localStorage.setItem('BranchId', JSON.stringify(this.branchId));

      });
  }

  getBranchHours() {
    this.branchWorkingHoursService.getBranchHours(this.branchId)
      .subscribe((response) => {
        this.branchWorkingHours = response.payload;
      });
  }


  routing() {
    if (this.userValues) {
      this.router.navigate(['/book-a-slot']);
    }
    else {
      this.router.navigate(['/login']);
    }
  }


  GetBranchUserReviewsById() {

    if (!this.fetchMore.reviews) {
      this.fetching = true;

      this.reviewsService.GetBranchUserReviewsById(this.branchId, this.paginationService.branchReviewsConfig)
        .subscribe((response: any) => {
          if (response) {

            if (response.payload == null || response.payload.length == 0) {
              this.fetchMore.reviews = false;
              return;
            }
            this.paginationService.branchReviewsConfig.currentPage += 1;
            this.branchReviews.push(...response.payload);

            this.fetching = false;
          }
        })
    }
  }


  GetMenuItemListBySection() {
    if (this.fetchMore.reviews) {
      this.fetching = true;

      this.menuService.GetMenuSection(this.branchId)
        .subscribe((response: any) => {
          if (response) {
            if (response.payload == null || response.payload.length == 0) {
              this.fetchMore.reviews = false;
              return;
            }

            this.paginationService.branchReviewsConfig.currentPage += 1;
            this.branchMenus.push(...response.payload);


            console.log(this.branchMenus);
            this.fetching = false;
          }
        })
    }
  }


  formateDate(date: string, formate: any) {
    return this.datepipe.transform(date, formate);
  }

  makeTabActive(e: any) {
    this.selectedTab = e;
  }

  onImgError(event: any) {
    event.target.src = './assets/img/logo/logo.svg'
    //Do other stuff with the event.target
  }

  openMenu(item: any) {
    this.router.navigate(['/add-ons',], { queryParams: { menu: JSON.stringify(item) } });
  }

  onChange(inc:number,m: number, i: number) {
 
    this.menuItem = this.branchMenus[m].menuItems[i];
    this.cartService.AddtoCart(inc,this.menuItem, this.addons);
  
  }

  addItem(){
    this.initialVal = this.initialVal+1;
  }
  removeItem(){
    this.initialVal = this.initialVal-1;
  }

  increment(){
    if(this.currentStep == 3){
      $("#tab1").trigger('click');
    }else{
          if(this.currentStep != 3){
      this.currentStep++;
    }
    }

  }

  decrement(){
    if(this.currentStep > 1){
      this.currentStep--;
    }
  }

  skipToMenu(){
    $("#tab1").trigger('click');
  }


}

