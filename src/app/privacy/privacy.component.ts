import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
currentStatus: string = '1. Contact Details';
  value: string = '1. Contact Details';
  constructor() { }

  ngOnInit(): void {
  }
  changeStatus(e:any){
   console.log(e.target.innerText);
   this.currentStatus = e.target.innerText;
  }
}
