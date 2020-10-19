import { Component, OnInit } from '@angular/core';
import { ObservablesService } from '../observables.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-observables-data-exchange-a',
  templateUrl: './observables-data-exchange-a.component.html',
  styleUrls: ['./observables-data-exchange-a.component.css'],
})
export class ObservablesDataExchangeAComponent implements OnInit {
  data: any;
  constructor(
    private router: Router,
    private observableService: ObservablesService
  ) {}

  ngOnInit(): void {
    this.observableService.currentData.subscribe((data) => (this.data = data));
  }

  changeData() {
    this.observableService.changeData({ name: 'George' });
    // this.router.navigate(['/observables/data-exchange-b']);
  }
}
