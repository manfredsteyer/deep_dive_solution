/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  jumpBy$ = new Subject<number>();

  constructor() { }
}
