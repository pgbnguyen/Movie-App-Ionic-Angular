import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriteMoviesPageRoutingModule } from './favorite-movies-routing.module';

import { FavoriteMoviesPage } from './favorite-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoriteMoviesPageRoutingModule
  ],
  declarations: [FavoriteMoviesPage]
})
export class FavoriteMoviesPageModule {}
