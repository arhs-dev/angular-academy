import { Component, OnInit } from '@angular/core';
import { ObservablesService } from '../observables.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-observables-data-exchange-b',
  templateUrl: './observables-data-exchange-b.component.html',
  styleUrls: ['./observables-data-exchange-b.component.css'],
})
export class ObservablesDataExchangeBComponent implements OnInit {
  data: any;
  constructor(
    private router: Router,
    private observableService: ObservablesService
  ) {}

  ngOnInit(): void {
    this.observableService.currentData.subscribe((data) => (this.data = data));
  }

  changeData() {
    this.observableService.changeData({ name: 'Giannis' });
    this.router.navigate(['/observables/data-exchange-a']);
  }
}
