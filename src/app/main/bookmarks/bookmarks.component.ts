import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
})
export class BookmarksComponent implements OnInit {
  bookmarks: Movie[];
  continueWatching: Movie[];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.mapBookmarksAndWatching();
    this.moviesService.fetchMoviesSubject.subscribe(() => {
      this.mapBookmarksAndWatching();
    });
  }

  private mapBookmarksAndWatching() {
    this.bookmarks = this.moviesService.bookmarks.map((id) =>
      this.moviesService.getMovieData(id)
    );
    this.continueWatching = this.moviesService.continueWatching.map((id) =>
      this.moviesService.getMovieData(id)
    );
  }
}
