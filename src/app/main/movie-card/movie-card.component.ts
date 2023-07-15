import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MoviesService } from 'src/app/movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  isBookmarked: boolean;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isBookmarked =
      this.moviesService.bookmarks.findIndex((id) => this.movie.id == id) > -1;

    this.moviesService.movieBookmarked.subscribe((id: string) => {
      if (this.movie.id === id)
        this.isBookmarked =
          this.moviesService.bookmarks.findIndex(
            (bookmarkId) => bookmarkId === id
          ) > -1;
    });
  }

  getBackground(background: string) {
    return `linear-gradient(to bottom, transparent 10%,var(--color-overlay-2), var(--color-overlay)),url("${background}")`;
  }
  onOpenDetails(event: Event) {
    const target = event.target as HTMLElement;
    if (target.closest('button')) return;

    this.router.navigate([this.movie.id], { relativeTo: this.route });
  }
  onToggleBookmark() {
    const isBookmarked = this.moviesService.toggleBookmark(this.movie.id);
    this.isBookmarked = isBookmarked;
  }
}
