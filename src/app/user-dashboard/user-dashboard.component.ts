import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FileService } from '../separate/services/file.service';
import { AccountService } from '../shared/services/account.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private fileService: FileService,
    private toastrService: ToastrService,) 
  {
    this.GetUserProfile();
   }

   file!:File ;

   name!: string;
   address!: string;
   picture!: "";

   profileForm = new FormGroup({
    name: new FormControl('', 
    [
      Validators.required,
    ]),
    address: new FormControl('',Validators.required),
    email: new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^(([^<>()\[\]\\.,;:\s#$&^*%!@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    ]),
    phone: new FormControl('',Validators.required)

  });

  userValues ={
    name:'',
    address: '',
    picture:''
  }

  SetData(){
    
    if(this.userValues.picture.length >0){
      this.userValues.name = this.profileForm.controls['name'].value;
    this.userValues.address = this.profileForm.controls['address'].value;
    }
    else{
      this.userValues.picture = this.userProfile.picture
    
      this.userValues.name = this.profileForm.controls['name'].value;
      this.userValues.address = this.profileForm.controls['address'].value;
    }
     
    //this.userValues.picture = this.userProfile.picture;
  }
    userProfile = {
      id: null,
      email: '',
      name: '',
      phoneNumber: '',
      address: '',
      picture:''
    }

  GetUserProfile(){ 
    
    this.accountService.GetUserProfile().subscribe((response)=>{
     this.userProfile = response.payload;
     this.name = this.userProfile.name;
     this.address= this.userProfile.address;
    })
  }

  UploadFile(event: any){
    
    this.file = event.target.files[0];
    let formData = new FormData();
    formData.append("file", this.file, this.file.name);
    this.fileService.fileUploadGenericCall("File/Upload", formData).subscribe((response)=>{
      if(response.type === HttpEventType.Response) {
        var res = response.body as any;
      
        this.userValues.picture = res.payload;
        
      }
      //this.userProfile.picture = response.payload
    });
  } 
 
  UpdateProfile(){
    if (this.profileForm.invalid)
    {
      this.profileForm.markAllAsTouched();
    }
    else
    {
    this.SetData();
    this.accountService.UpdateUser(this.userValues).subscribe((response)=>{
      if(response.status=="Success"){
     
          this.toastrService.success(response.message);
          console.log(response.payload);
      }
      else
      {
       this.toastrService.error(response.message)
      }
      

    });
  }
  }
  
  ngOnInit(): void {
  }

}
