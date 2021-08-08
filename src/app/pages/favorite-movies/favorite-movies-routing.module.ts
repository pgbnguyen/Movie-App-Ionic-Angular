import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteMoviesPage } from './favorite-movies.page';

const routes: Routes = [
  {
    path: '',
    component: FavoriteMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteMoviesPageRoutingModule {}
