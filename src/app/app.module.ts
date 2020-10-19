import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { ObservablesModule } from './observables/observables.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MoviesModule, ObservablesModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
