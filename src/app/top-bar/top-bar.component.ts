import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ToastrService } from 'ngx-toastr';
import { RestaurantBranchService } from '../separate/services/restaurant-branch.service';
import { AuthService } from '../shared/auth.service';
import { EventEmitters } from '../shared/event/EventEmitters';
import { PaginationService } from '../shared/services/pagination.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {


    isLogin!: false;
  constructor(private restaurantBranchService: RestaurantBranchService,
    private toastr: ToastrService,
    private paginationService: PaginationService,
    private authService: AuthService,
    private router: Router,
    private emitterService:EventEmitters
     ) 
     {
       this.emitterService.isLogin.subscribe(e=>{
          this.isLogin = e;
       });
     }



    ngOnInit(): void {  
      this.isLogin = JSON.parse(localStorage.getItem('IsLogin') as any);
    }

    CheckLogin(){
      if(this.isLogin){
        this.router.navigate(['/checkout']);
      }
      else{
        this.router.navigate(['/login']);
      }
    }

    LoginCheck(){
      if(this.isLogin){
        this.router.navigate(['/dashboard']);
      }
      else{
        this.router.navigate(['/login']);
      }
    }
   

    Logout(){

      localStorage.removeItem('User');
      localStorage.removeItem('MenuItems');
      localStorage.removeItem('Addons');


      this.authService.Logout().subscribe((response)=>{
        this.toastr.success(response.message);
      });
      this.isLogin = false;
 
      this.emitterService.isLogin.emit(false);
      localStorage.setItem('IsLogin',JSON.stringify(this.isLogin))
      this.router.navigate(['/login']);
      
    }
 
}
