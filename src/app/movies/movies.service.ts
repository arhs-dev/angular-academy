import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Movie } from './movie';
import { MovieDetails } from './movie-details';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  //  private handleError: HandleError;
  moviesUrl = environment.config.api.url;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  constructor(private http: HttpClient) {}

  /** GET Movies from the server */
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  /** POST: add a new movie to the database */
  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesUrl, movie, this.httpOptions).pipe(
      catchError(this.handleError) // then handle the error
    );
  }

  /** DELETE: delete a movie from the server */
  deleteMovie(id: number): Observable<{}> {
    const url = `${this.moviesUrl}/${id}`; // DELETE api/movies/1
    return this.http.delete(url, this.httpOptions).pipe(
      catchError(this.handleError) // then handle the error
    );
  }

  /** PUT: update a movie on the server. Returns the updated movie upon success. */
  updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(this.moviesUrl, movie, this.httpOptions).pipe(
      catchError(this.handleError) // then handle the error
    );
  }

  /** GET a text file */
  getTextFile(filename: string) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get(filename, { responseType: 'text' }).pipe(
      tap(
        // Log the result or error
        (data) => console.log(data),
        (error) => console.log(error)
      )
    );
  }

  searchMovieDetails(movieName: string): Observable<MovieDetails[]> {
    // clear if no movie name
    if (!movieName.trim()) {
      return of([]);
    }

    const options = this.createHttpOptions(movieName);

    return this.http.get(`${environment.config.omdbapi.baseUrl}`, options).pipe(
      map((data: any) => {
        return data.Search.map(
          (entry: any) =>
            ({
              imdbId: entry.imdbID,
              title: entry.Title,
              year: entry.Year,
              type: entry.Type,
            } as MovieDetails)
        );
      }),
      catchError(this.handleError)
    );
  }

  /** Error Handler for producing a useful message */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  private createHttpOptions(movieName: string) {
    // omdb free search api
    // e.g., http://www.omdbapi.com/?s=Titanic&apikey=8ad96311'
    const params = new HttpParams({
      fromObject: { s: movieName, apikey: environment.config.omdbapi.apiKey },
    });
    return { params };
  }
}
