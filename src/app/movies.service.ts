import { EventEmitter, Output } from '@angular/core';
import { Movie } from './main/movie.model';

export class MoviesService {
  movies: Movie[] = [
    new Movie(
      '1',
      'Fast X',
      '/e2Jd0sYMCe6qvMbswGQbM0Mzxt0.jpg',
      '/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      `Over many missions and against impossible odds, Dom Toretto and his family
      have outsmarted, out-nerved and outdriven every foe in their path. Now,
      they confront the most lethal opponent they've ever faced: A terrifying
      threat emerging from the shadows of the past who's fueled by blood
      revenge, and who is determined to shatter this family and destroy
      everything—and everyone—that Dom loves, forever.`,
      7.3,
      '2023-05-17'
    ),
    new Movie(
      '2',
      'Extraction 2',
      '/fhquRW28vRZHr26orSaFFnhYIA0.jpg',
      '/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg',
      "Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world's deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Vienna, in order to get revenge.",
      7.6,
      '2023-06-09'
    ),
    new Movie(
      '3',
      'John Wick: Chapter 4',
      '/fgw4rFs4XMWdJTWp1eMacHKQqbZ.jpg',
      '/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
      'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
      7.9,
      '2023-03-22'
    ),
    new Movie(
      '4',
      'Spider-Man: Across the Spider-Verse',
      '/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg',
      '/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.',
      8.6,
      '2023-05-31'
    ),
    new Movie(
      '5',
      'Fast X',
      '/e2Jd0sYMCe6qvMbswGQbM0Mzxt0.jpg',
      '/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      `Over many missions and against impossible odds, Dom Toretto and his family
        have outsmarted, out-nerved and outdriven every foe in their path. Now,
        they confront the most lethal opponent they've ever faced: A terrifying
        threat emerging from the shadows of the past who's fueled by blood
        revenge, and who is determined to shatter this family and destroy
        everything—and everyone—that Dom loves, forever.`,
      7.3,
      '2023-05-17'
    ),
    new Movie(
      '6',
      'Extraction 2',
      '/fhquRW28vRZHr26orSaFFnhYIA0.jpg',
      '/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg',
      "Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world's deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Vienna, in order to get revenge.",
      7.6,
      '2023-06-09'
    ),
    new Movie(
      '7',
      'John Wick: Chapter 4',
      '/fgw4rFs4XMWdJTWp1eMacHKQqbZ.jpg',
      '/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
      'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
      7.9,
      '2023-03-22'
    ),
    new Movie(
      '8',
      'Spider-Man: Across the Spider-Verse',
      '/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg',
      '/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.',
      8.6,
      '2023-05-31'
    ),
  ];
  bookmarks: string[] = ['7', '8'];

  getMovieData(id: string): Movie {
    const movie: Movie = this.movies.find((movie) => movie.id == id);
    return movie;
  }
}
