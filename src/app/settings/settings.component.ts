import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageURL:string = 'https://cdn.pixabay.com/photo/2017/08/06/21/01/louvre-2596278_960_720.jpg';
   loadFile(e: any) {
    this.imageURL = URL.createObjectURL(e.target.files[0]);
  };
  

}
