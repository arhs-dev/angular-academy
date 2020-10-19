import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesComponent } from './observables.component';
import { ObservablesMapComponent } from './observables-map/observables-map.component';
import { ObservablesPipeComponent } from './observables-pipe/observables-pipe.component';
import { ObservablesService } from './observables.service';
import { ObservablesDataExchangeAComponent } from './observables-data-exchange-a/observables-data-exchange-a.component';
import { ObservablesDataExchangeBComponent } from './observables-data-exchange-b/observables-data-exchange-b.component';
import { ObservablesFormComponent } from './observables-form/observables-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObservablesRoutingModule } from './observables-routing.module';
import { ObservablesTimerComponent } from './observables-timer/observables-timer.component';
import { ObservablesStarterComponent } from './observables-starter/observables-starter.component';

@NgModule({
  declarations: [
    ObservablesComponent,
    ObservablesMapComponent,
    ObservablesPipeComponent,
    ObservablesDataExchangeAComponent,
    ObservablesDataExchangeBComponent,
    ObservablesFormComponent,
    ObservablesTimerComponent,
    ObservablesStarterComponent,
  ],
  providers: [ObservablesService],
  imports: [
    CommonModule,
    ObservablesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ObservablesComponent],
})
export class ObservablesModule {}
