import { InjectionToken } from '@angular/core';
import { FlightService } from './flight.service';

export const FLIGHT_SERVICES = new InjectionToken<FlightService>('FLIGHT_SERVICES');

