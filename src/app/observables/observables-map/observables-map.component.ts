import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observables-map',
  templateUrl: './observables-map.component.html',
  styleUrls: ['./observables-map.component.css'],
})
export class ObservablesMapComponent implements OnInit {
  constructor() {}

  nums = of(1, 2, 3);
  squareValues = map((val: number) => val * val);
  squaredNums = this.squareValues(this.nums);

  getSquaredNums() {
    this.squaredNums.subscribe((x) => console.log(x));
    // Logs
    // 1
    // 4
    // 9
  }

  ngOnInit(): void {}
}
