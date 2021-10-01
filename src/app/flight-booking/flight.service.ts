import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BASE_URL } from '../app.tokens';
import { Flight } from './flight';
import { FlightBookingApiModule } from './flight-booking-api.module';

@Injectable()
export class DummyFlightService implements FlightService {

  findById(id: number): Observable<Flight> {
    return of({
      id: 1,
      from: 'Graz',
      to: 'Flagranti',
      date: '2023-12-24T17:00+01:00'
    });
  }

  find(from: string, to: string): Observable<Flight[]> {
    return of([
      { id: 1, from: 'Graz', to: 'Flagranti', date: '2023-12-24T17:00+01:00' },
      { id: 2, from: 'Graz', to: 'Kognito', date: '2023-12-24T17:15+01:00' },
      { id: 3, from: 'Graz', to: 'Mallorca', date: '2023-12-24T17:30+01:00' },
      { id: 4, from: 'Graz', to: 'Weihnachtsinsel', date: '2023-12-24T17:45+01:00' },
    ]);
  }
}

@Injectable()
export class DefaultFlightService implements FlightService {

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string,
    ) {
  }

  find(from: string, to: string): Observable<Flight[]> {

    const url = this.baseUrl + '/flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    return this.http.get<Flight[]>(url, {headers, params});
  }

  findById(id: number): Observable<Flight> {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams().set('id', id);

    return this.http.get<Flight>(url, {headers, params});
  }
}

const DEBUG = false;

@Injectable({
  providedIn: FlightBookingApiModule,
  useClass: DefaultFlightService,
  // useFactory: (http: HttpClient) => {
  //   if (DEBUG) {
  //     return new DummyFlightService();
  //   }
  //   else {
  //     return new DefaultFlightService(http);
  //   }
  // },
  // deps: [HttpClient]
})
export abstract class FlightService {
  abstract find(from: string, to: string): Observable<Flight[]>;
  abstract findById(id: number): Observable<Flight>;
}
