import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MainComponent } from './main/main.component';
import { MovieListComponent } from './main/movie-list/movie-list.component';
import { MovieCardComponent } from './main/movie-card/movie-card.component';
import { MovieDetailsComponent } from './main/movie-details/movie-details.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, SearchbarComponent, MainComponent, MovieListComponent, MovieCardComponent, MovieDetailsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
