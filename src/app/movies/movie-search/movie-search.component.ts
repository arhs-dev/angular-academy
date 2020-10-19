import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MovieDetails } from '../movie-details';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  providers: [MoviesService],
})
export class MovieSearchComponent implements OnInit {
  movies$: Observable<MovieDetails[]>;
  private searchText$ = new Subject<string>();

  constructor(private movieService: MoviesService) {}

  search(movieName: string) {
    this.searchText$.next(movieName);
  }

  ngOnInit() {
    this.movies$ = this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((movieName) => this.movieService.searchMovieDetails(movieName))
    );
  }
}
