// src/app/flight-booking/flight-edit/flight-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { DummyComponent } from 'src/app/dummy/dummy.component';
import { ExitComponent } from 'src/app/shared/exit/exit.guard';
import { Flight } from '../flight';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit, ExitComponent {

  dummy = DummyComponent;

  id = 0;
  showDetails = false;
  flight?: Flight;
  showWarning = false;
  observer?: Observer<boolean>;

  constructor(private route: ActivatedRoute) { }

  canExit(): Observable<boolean> {
    this.showWarning = true;
    return new Observable<boolean>(observer => {
      this.observer = observer;
    });
  }

  decide(decision: boolean): void {
    this.showWarning = false;
    this.observer?.next(decision);
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p.id;
      this.showDetails = p.showDetails;
    });

    this.route.data.subscribe(data => {
      this.flight = data.flight;
    });

  }

}
