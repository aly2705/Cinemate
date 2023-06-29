export class Movie {
  public coverUrl: string;
  public posterUrl: string;
  public title: string;
  public overview: string;
  public rating: number;
  public releaseDate: string;

  constructor(
    title: string,
    cover: string,
    poster: string,
    overview: string,
    rating: number,
    releaseDate: string
  ) {
    this.title = title;
    this.coverUrl = `https://image.tmdb.org/t/p/w342${cover}`;
    this.posterUrl = `https://image.tmdb.org/t/p/w342${poster}`;
    this.overview = overview;
    this.rating = rating;
    this.releaseDate = releaseDate;
  }
}
