import { InjectionToken } from '@angular/core';

export const BASE_URL = new InjectionToken<string>('BASE_URL', {
    providedIn: 'root',
    factory: () => 'http://www.angular.at/api'
});
