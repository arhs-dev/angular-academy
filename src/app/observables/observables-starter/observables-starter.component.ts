import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-observables-starter',
  templateUrl: './observables-starter.component.html',
  styleUrls: ['./observables-starter.component.css'],
})
export class ObservablesStarterComponent implements OnInit {
  constructor() {}

  //First Observable example
  myObservable = of(1, 2, 3);
  myObserver = {
    next: (x) => console.log('Observer got a next value: ' + x),
    error: (err) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  //First Observable example
  callSimpleObservable() {
    this.myObservable.subscribe(this.myObserver);
    // Logs:
    // Observer got a next value: 1
    // Observer got a next value: 2
    // Observer got a next value: 3
    // Observer got a complete notification
  }

  ngOnInit(): void {}
}
