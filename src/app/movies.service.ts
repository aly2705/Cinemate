import { Injectable } from '@angular/core';
import { Movie } from './models/movie.model';
import { Observable, Subject, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieListAPIObject } from './models/movieListAPIObject.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  movies: Movie[] = [];
  trending: Movie[] = [];
  series: Movie[] = [];
  bookmarks: string[] = [];
  continueWatching: string[] = [];
  movieBookmarked = new Subject<string>();
  fetchMoviesSubject = new Subject<void>();

  constructor(private http: HttpClient) {}

  initMovies() {
    this.fetchData().subscribe(([trending, movies, series]) => {
      this.trending = trending;
      this.series = series;
      this.movies = movies;
      this.bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
      this.continueWatching =
        JSON.parse(localStorage.getItem('watching')) || [];
      this.fetchMoviesSubject.next();
    });
  }

  fetchData() {
    return forkJoin([
      this.fetchTrending(),
      this.fetchSeries(),
      this.fetchMovies(),
    ]);
  }

  getMovieData(id: string): Movie {
    const allMovies = [...this.movies, ...this.trending, ...this.series];
    const movie: Movie = allMovies.find((movie) => movie.id == id);
    return movie;
  }

  toggleBookmark(id: string) {
    const index = this.bookmarks.findIndex((bookmarkId) => bookmarkId === id);

    if (index == -1) this.bookmarks.push(id);
    else this.bookmarks.splice(index, 1);

    this.persistBookmarks(this.bookmarks);

    this.movieBookmarked.next(id);
    return index == -1;
  }

  startWatching(id: string) {
    if (!this.continueWatching.includes(id)) this.continueWatching.push(id);
    this.persistWatching(this.continueWatching);
  }

  private persistBookmarks(bookmarks: string[]) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
  private persistWatching(watching: string[]) {
    localStorage.setItem('watching', JSON.stringify(watching));
  }

  private fetchMovies(): Observable<Movie[]> {
    return this.http
      .get<MovieListAPIObject>(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=afe0cbb1a8d32b292c597c90b5be2144'
      )
      .pipe(
        map((responseData) => {
          const results = responseData.results;

          return results.map(
            (result) =>
              new Movie(
                `${result.id}`,
                result.title || result.name,
                result.backdrop_path,
                result.poster_path,
                result.overview,
                result.vote_average,
                result.release_date
              )
          );
        })
      );
    // .subscribe((movies: Movie[]) => {
    //   this.movies = movies;
    //   this.fetchMoviesSubject.next();
    // });
  }
  private fetchTrending(): Observable<Movie[]> {
    return this.http
      .get<MovieListAPIObject>(
        'https://api.themoviedb.org/3/trending/all/day?api_key=afe0cbb1a8d32b292c597c90b5be2144'
      )
      .pipe(
        map((responseData) => {
          const results = responseData.results;

          return results.map(
            (result) =>
              new Movie(
                `${result.id}`,
                result.title || result.name,
                result.backdrop_path,
                result.poster_path,
                result.overview,
                result.vote_average,
                result.release_date
              )
          );
        })
      );
    // .subscribe((movies: Movie[]) => {
    //   this.trending = movies;
    //   this.fetchTrendingSubject.next();
    // });
  }
  private fetchSeries(): Observable<Movie[]> {
    return this.http
      .get<MovieListAPIObject>(
        'https://api.themoviedb.org/3/tv/top_rated?api_key=afe0cbb1a8d32b292c597c90b5be2144'
      )
      .pipe(
        map((responseData) => {
          const results = responseData.results;

          return results.map(
            (result) =>
              new Movie(
                `${result.id}`,
                result.title || result.name,
                result.backdrop_path,
                result.poster_path,
                result.overview,
                result.vote_average,
                result.release_date
              )
          );
        })
      );
    // .subscribe((movies: Movie[]) => {
    //   this.series = movies;
    //   this.fetchSeriesSubject.next();
    // });
  }
}
