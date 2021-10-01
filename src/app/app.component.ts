import { Component, Inject, OnInit } from '@angular/core';
import { BASE_URL } from './app.tokens';
import { FlightService } from './flight-booking/flight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World!';

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    ) {

      console.log('BASE_URL', baseUrl);

    }

}
