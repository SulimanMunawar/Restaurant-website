import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  tabs = [
    { title: 'First', content: 'First Tab Content', active: true },
    { title: 'Second', content: 'Second Tab Content',  },
    { title: 'Third', content: 'Third Tab Content', removable: true },
    { title: 'Four', content: 'Fourth Tab Content', disabled: true }
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
