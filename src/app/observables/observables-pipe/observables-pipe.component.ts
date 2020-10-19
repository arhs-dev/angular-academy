import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observables-pipe',
  templateUrl: './observables-pipe.component.html',
  styleUrls: ['./observables-pipe.component.css'],
})
export class ObservablesPipeComponent implements OnInit {
  constructor() {}

  squareOdd = of(1, 2, 3, 4, 5).pipe(
    filter((n) => n % 2 !== 0),
    map((n) => n * n)
  );

  getSquareOdds() {
    // Subscribe to get values
    this.squareOdd.subscribe((x) => console.log(x));
    // Logs
    // 1
    // 9
    // 25
  }

  ngOnInit(): void {}
}
