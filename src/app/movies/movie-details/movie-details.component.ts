import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  @Input()
  selectedMovieTitle: string = '';

  constructor() {}

  ngOnInit(): void {}
}
