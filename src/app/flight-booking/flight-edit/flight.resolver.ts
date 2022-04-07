
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Flight } from '../flight';
import { FlightBookingApiModule } from '../flight-booking-api.module';
import { FlightService } from '../flight.service';

@Injectable({
    providedIn: FlightBookingApiModule
})
export class FlightResolver implements Resolve<Flight> {

    constructor(private flightService: FlightService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<Flight> {
        const id = route.params.id;
        return this.flightService.findById(id).pipe(delay(7000));
    }
}
