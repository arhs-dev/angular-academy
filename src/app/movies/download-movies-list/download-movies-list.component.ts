import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-download-movies-list',
  templateUrl: './download-movies-list.component.html',
  styleUrls: ['./download-movies-list.component.css'],
})
export class DownloadMoviesListComponent implements OnInit {
  contents: string;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}

  downloadMoviesFromTextFile() {
    this.moviesService
      .getTextFile('assets/movies-list.txt')
      .subscribe((results) => (this.contents = results));
  }

  clear() {
    this.contents = undefined;
  }
}
