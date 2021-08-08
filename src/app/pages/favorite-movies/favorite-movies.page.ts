import { Component, OnInit } from '@angular/core';
import { FavoriteMoviesService } from 'src/app/services/favorite-movies.service';
import { Movie } from './favorite-movies.model';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.page.html',
  styleUrls: ['./favorite-movies.page.scss'],
})
export class FavoriteMoviesPage implements OnInit {
  favoriteMovies: Movie[];
  constructor(private favoriteService: FavoriteMoviesService) {}

  ngOnInit() {
    this.favoriteService
      .getAllFavorite()
      .then((result) => (this.favoriteMovies = result));
    console.log(this.favoriteMovies);
  }
  deleteAll() {
    this.favoriteService.deleteAllFavorites();
    this.favoriteService
      .getAllFavorite()
      .then((result) => (this.favoriteMovies = result));
  }
  deleteOne(movie: Movie) {
    this.favoriteService.deleteOneFavorite(movie);
    this.favoriteService
      .getAllFavorite()
      .then((result) => (this.favoriteMovies = result));
  }
}
