import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    name: new FormControl(''),
    phoneNumber: new FormControl('')

  });
  registerResult = {

  };

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }
  

   Register(){
    return this.authService.Register(this.loginForm.value).subscribe((response)=>{
      response.payload;
   
    });
  }
}
