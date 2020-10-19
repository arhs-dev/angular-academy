import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservablesService {
  private dataSource = new BehaviorSubject({ name: 'Dimitris' });
  currentData = this.dataSource.asObservable();

  constructor() {}

  changeData(data: any) {
    this.dataSource.next(data);
  }
}
