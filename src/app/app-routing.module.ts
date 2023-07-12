import { Routes, RouterModule } from '@angular/router';

import { MovieListsComponent } from './main/movie-lists/movie-lists.component';
import { BookmarksComponent } from './main/bookmarks/bookmarks.component';
import { NgModule } from '@angular/core';
import { MovieDetailsComponent } from './main/movie-details/movie-details.component';

const appRoutes: Routes = [
  {
    path: 'browse',
    component: MovieListsComponent,
    children: [{ path: ':id', component: MovieDetailsComponent }],
  },
  {
    path: 'bookmarks',
    component: BookmarksComponent,
    children: [{ path: ':id', component: MovieDetailsComponent }],
  },
  { path: '', redirectTo: 'browse', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
