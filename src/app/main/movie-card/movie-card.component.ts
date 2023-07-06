import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../movie.model';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie: Movie;
  @Input() id: number;

  constructor(private moviesService: MoviesService) {}

  getBackground(background: string) {
    return `linear-gradient(to bottom, transparent 10%,var(--color-overlay-2), var(--color-overlay)),url("${background}")`;
  }
  onOpenDetails() {
    this.moviesService.movieDetailsRequested.emit(this.movie);
  }
}
