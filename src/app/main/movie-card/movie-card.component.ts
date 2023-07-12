import { Component, Input } from '@angular/core';
import { Movie } from '../movie.model';
import { MoviesService } from 'src/app/movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie: Movie;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  getBackground(background: string) {
    return `linear-gradient(to bottom, transparent 10%,var(--color-overlay-2), var(--color-overlay)),url("${background}")`;
  }
  onOpenDetails() {
    this.router.navigate([this.movie.id], { relativeTo: this.route });
  }
  onBookmarkMovie() {}
}
