import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  movies: Movie[];
  movieCardShown: boolean = false;
  movieCardData: Movie | null;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movies = this.moviesService.movies;
    this.moviesService.movieDetailsRequested.subscribe((movie: Movie) => {
      this.movieCardData = movie;
      this.movieCardShown = true;
    });
  }
  onCloseMovieDetails() {
    this.movieCardShown = false;
    this.movieCardData = null;
  }
}
