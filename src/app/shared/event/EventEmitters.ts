import { EventEmitter, Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class EventEmitters {

  isLogin=new EventEmitter<any>();
  refreshorder = new EventEmitter<any>();

}
