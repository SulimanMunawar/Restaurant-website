import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { EventEmitters } from '../shared/event/EventEmitters';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
  ]),
    password: new FormControl('',
    [
      Validators.required,
    ],),

  });

  isLogin!: boolean;
  
  logInResult = {
    id:'',
    name: '',
    email: '',
    mobile: '',
    address: '',
    token: {
      tokenString:'',
      refreashToken: ''
    },
    role: '',
    photo: '',
    isApproved: '',
  };

  constructor(private authService: AuthService,
    private router: Router,
    private emitterService:EventEmitters,
    private toastrService: ToastrService) 
  { 
    
 
  }
  
  ngOnInit(): void {
    //this.isLogin = JSON.parse( localStorage.getItem('IsLogin') as any)
  }
  
  SetData(){
    localStorage.setItem('User', JSON.stringify(this.logInResult)); 
    localStorage.setItem('IsLogin',JSON.stringify(this.isLogin));
  }

  LogIn(){
    if (this.loginForm.invalid)
    {
    this.loginForm.markAllAsTouched();
    }
    else
    {    
    this.authService.Login(this.loginForm.value).subscribe((response)=>{
      console.log(response);
    
      if(response.errorCode==2){
        this.router.navigate([`/verify-email/${response.payload.id}/${response.payload.email}`]);
      }
      else
      {
        if(response.status=="Success")
        {
          this.toastrService.success(response.message);
          this.logInResult = response.payload;
          this.emitterService.isLogin.emit(true);
          this.isLogin = true;
          this.router.navigate(['/home']);
        }
        else
        {
            this.toastrService.error(response.message);
        }

     
      this.SetData();
    
      }
    
    });
  }
  }

}
