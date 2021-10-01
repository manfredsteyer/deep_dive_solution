import { Component, Inject, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { debounce, debounceTime, filter } from 'rxjs/operators';
import { BASE_URL } from './app.tokens';
import { FlightService } from './flight-booking/flight.service';
import { AuthService } from './shared/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hello World!';
  showLoadingIndicator = false;

  constructor(
    private authService: AuthService,
    private router: Router) {
      this.authService.login('Max!', '123456');
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationStart
        || e instanceof NavigationEnd
        || e instanceof NavigationCancel
        || e instanceof NavigationError),
      debounceTime(300)
    ).subscribe(e => {

      if (e instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      else {
        this.showLoadingIndicator = false;
      }
    });
  }

}
