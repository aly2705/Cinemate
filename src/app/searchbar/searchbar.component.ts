import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  @ViewChild('f') form: NgForm;

  constructor(private moviesService: MoviesService, private router: Router) {}

  onSearch() {
    if (!this.form.valid) return;

    this.router.navigate(['/search']);
    this.moviesService.searchMovie(this.form.value.search);
    this.form.reset();
  }
}
