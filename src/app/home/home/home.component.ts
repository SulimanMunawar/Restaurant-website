import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestaurantBranchService } from 'src/app/separate/services/restaurant-branch.service';
import { LocationService } from 'src/app/shared/services/location.service';
import { PaginationService } from 'src/app/shared/services/pagination.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private restaurantBranchService: RestaurantBranchService,
    private toastr: ToastrService,
    public paginationService: PaginationService,
    public router: Router,
    private locationService: LocationService) 
    { 
      this.GetLocation();
    }

    lng: any;
    lat: any;

  ngOnInit(): void {
  }

  restaurantBranchList: any[] = [];

  onSearch() {
    
    this.paginationService.paginationConfig.currentPage = 1;
   
    this.restaurantBranchService.getRestaurantBranchList(this.paginationService.paginationConfig).subscribe((response)=>{
      if (response.total > 0 && response.rowNumber === 0) {
        this.paginationService.paginationConfig.currentPage = response.nextPage;
      }
      else {
        debugger;
        this.restaurantBranchList = response.payload;
        this.router.navigateByUrl('/resturants');

        this.paginationService.paginationConfig.totalItems = response.total
        this.paginationService.paginationConfig.currentPage = response.pageNumber;
      }
    });
  }

  GetLocation(){
    this.locationService.getPosition().then(pos=>
      {
        console.log(`Positon: ${this.lng = pos.lng} ${this.lat = pos.lat}`);
        this.paginationService.paginationConfig.lat = this.lat;
        this.paginationService.paginationConfig.lng = this.lng;
      });
  }

}
