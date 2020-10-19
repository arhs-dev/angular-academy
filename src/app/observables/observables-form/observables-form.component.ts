import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-observables-form',
  templateUrl: './observables-form.component.html',
  styleUrls: ['./observables-form.component.css'],
})
export class ObservablesFormComponent implements OnInit {
  inputChangeLog: string[] = [];
  inputForm: FormGroup;
  constructor() {}

  logInputChange() {
    const nameControl = this.inputForm.get('name');
    nameControl.valueChanges.forEach((value: string) => {
      this.inputChangeLog.push(value);
      console.log(this.inputChangeLog);
    });
  }

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      name: new FormControl(),
    });
    this.logInputChange();
  }
}
