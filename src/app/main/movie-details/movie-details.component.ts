import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../movie.model';
import { MoviesService } from 'src/app/movies.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieData: Movie;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.movieData = this.moviesService.getMovieData(id);

    this.route.params.subscribe((params: Params) => {
      this.movieData = this.moviesService.getMovieData(params['id']);
    });
  }

  onCloseModal() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
