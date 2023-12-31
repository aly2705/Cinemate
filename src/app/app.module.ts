import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MainComponent } from './main/main.component';
import { MovieListComponent } from './main/movie-list/movie-list.component';
import { MovieCardComponent } from './main/movie-card/movie-card.component';
import { MovieDetailsComponent } from './main/movie-details/movie-details.component';
import { MoviesService } from './movies.service';
import { MovieListsComponent } from './main/movie-lists/movie-lists.component';
import { BookmarksComponent } from './main/bookmarks/bookmarks.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './main/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SearchbarComponent,
    MainComponent,
    MovieListComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    MovieListsComponent,
    BookmarksComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
