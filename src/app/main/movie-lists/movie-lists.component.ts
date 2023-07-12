import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movie-lists',
  templateUrl: './movie-lists.component.html',
  styleUrls: ['./movie-lists.component.css'],
})
export class MovieListsComponent implements OnInit {
  movies: Movie[];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movies = this.moviesService.movies;
  }
}
