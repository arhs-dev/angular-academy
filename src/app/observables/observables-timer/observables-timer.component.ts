import { Component, OnInit } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables-timer',
  templateUrl: './observables-timer.component.html',
  styleUrls: ['./observables-timer.component.css'],
})
export class ObservablesTimerComponent implements OnInit {
  // Observable timer example
  runningTimes: Array<number> = [];
  source: Observable<number> = timer(1000, 2000); //Executes after 1s and then every 2s
  subscribe: Subscription;

  constructor() {}

  // Observable timer example
  executeTimerSubscription() {
    this.subscribe = this.source.subscribe((val) => {
      console.log(val);
      this.runningTimes.push(val);
    });

    setTimeout(() => {
      this.subscribe.unsubscribe();
    }, 5000);
  }

  ngOnInit(): void {}
}
