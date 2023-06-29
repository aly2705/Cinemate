import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  backgrounds = [
    'https://image.tmdb.org/t/p/w342/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg',
    'https://image.tmdb.org/t/p/w342/fgw4rFs4XMWdJTWp1eMacHKQqbZ.jpg',
    'https://image.tmdb.org/t/p/w342/xXp7TbCOKe4lB65ngkt3CuhsiAa.jpg',
    'https://image.tmdb.org/t/p/w342/pNOccytgkGuyofTLmh1sqEfTJuE.jpg',
    'https://image.tmdb.org/t/p/w342/cSYLX73WskxCgvpN3MtRkYUSj1T.jpg',
    'https://image.tmdb.org/t/p/w342/9t0tJXcOdWwwxmGTk112HGDaT0Q.jpg',
  ];

  getBackground() {
    const randomIndex = Math.trunc(Math.random() * 5);
    const background = this.backgrounds[randomIndex];
    // return `url("${background}")`;
    return `linear-gradient(to bottom, transparent,var(--color-overlay-2), var(--color-overlay)),url("${background}")`;
  }
}
