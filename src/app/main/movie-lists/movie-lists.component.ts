import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movie-lists',
  templateUrl: './movie-lists.component.html',
  styleUrls: ['./movie-lists.component.css'],
})
export class MovieListsComponent implements OnInit {
  trending: Movie[] = [];
  movies: Movie[] = [];
  series: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movies = this.moviesService.movies;
    this.trending = this.moviesService.trending;
    this.series = this.moviesService.series;
    this.moviesService.fetchMoviesSubject.subscribe(() => {
      this.movies = this.moviesService.movies;
    });
    this.moviesService.fetchTrendingSubject.subscribe(() => {
      this.trending = this.moviesService.trending;
    });
    this.moviesService.fetchSeriesSubject.subscribe(() => {
      this.series = this.moviesService.series;
    });
  }
}
