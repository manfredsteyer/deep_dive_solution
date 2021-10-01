import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flights = [
    { id: 1, from: 'Graz', to: 'Flagranti', date: '2022-12-24T17:00+01:00'},
    { id: 2, from: 'Graz', to: 'Kognito', date: '2022-12-24T17:30+01:00'},
    { id: 3, from: 'Graz', to: 'Mallorca', date: '2022-12-24T18:00+01:00'},
    { id: 4, from: 'Graz', to: 'Ibiza', date: '2022-12-24T18:30+01:00'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
