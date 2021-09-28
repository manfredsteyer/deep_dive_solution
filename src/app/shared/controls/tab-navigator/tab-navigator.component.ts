import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-navigator',
  templateUrl: './tab-navigator.component.html',
  styleUrls: ['./tab-navigator.component.scss']
})
export class TabNavigatorComponent implements OnInit {

  @Input() currentPage = 1;

  constructor() { }

  ngOnInit(): void {
  }

  next(): void {
  }

  prev(): void {
  }

}
