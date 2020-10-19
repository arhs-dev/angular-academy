import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieHighlighterDirective } from './movie-highlighter.directive';
import { MoviesRoutingModule } from './movies-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MoviesService } from './movies.service';
import { MoviesComponent } from './movies-container/movies.component';
import { DownloadMoviesListComponent } from './download-movies-list/download-movies-list.component';
import { FormsModule } from '@angular/forms';
import { LoggingInterceptor } from './interceptors/logging-interceptor';
import { MovieSearchComponent } from './movie-search/movie-search.component';

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieDetailsComponent,
    MovieHighlighterDirective,
    MoviesComponent,
    DownloadMoviesListComponent,
    MovieSearchComponent,
  ],
  providers: [
    MoviesService,
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  ],
  imports: [
    CommonModule,
    FormsModule,
    MoviesRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
      put204: false, // return entity after PUT/update
    }),
  ],
  exports: [
    MoviesComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    MovieHighlighterDirective,
    MovieSearchComponent,
  ],
})
export class MoviesModule {}
