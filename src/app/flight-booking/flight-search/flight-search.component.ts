import { Component, Inject, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Flight } from '../flight';
import { FLIGHT_SERVICES } from '../flight-booking.tokens';
import { DummyFlightService, FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
  providers: [
    { provide: FlightService, useClass: DummyFlightService}
  ]
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg';
  to = 'Graz';
  flights: Array<Flight> = [];
  selectedFlight: Flight | null = null;
  delayFilter = false;

  basket: { [key: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(@Inject(FLIGHT_SERVICES) private flightServices: FlightService[]) {
  }

  ngOnInit(): void {
  }

  search(): void {

    combineLatest(
      this.flightServices.map(fs => fs.find(this.from, this.to))
    ).subscribe({
      next: (flightsResults) => {

        const flights = flightsResults.flat();
        console.debug('flights', flights);
        this.flights = flights;
      },
      error: (err) => {
        console.debug('Error', err);
      }
    });

  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
