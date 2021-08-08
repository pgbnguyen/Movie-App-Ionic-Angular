/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Movie } from '../pages/favorite-movies/favorite-movies.model';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class FavoriteMoviesService {
  private _storage: Storage = null;

  constructor(private storage: Storage) {
    this.init();
  }
  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    let storage = null;
    storage = await this.storage.create();
    // eslint-disable-next-line no-underscore-dangle
    this._storage = storage;
  }
  public saveMovieToFavorite(title: any, year: string, poster) {
    // eslint-disable-next-line prefer-const
    let newFavorite = new Movie(title, year, poster);
    // eslint-disable-next-line no-underscore-dangle
    this._storage?.set(title, newFavorite);
    this.logAllMovies();
  }
  public async getAllFavorite() {
    // eslint-disable-next-line prefer-const
    let favoriteMovies: Movie[] = [];
    // eslint-disable-next-line no-underscore-dangle
    if (this._storage != null) {
      await this._storage.forEach((value, key, index) => {
        favoriteMovies.push(value as Movie);
      });
    }

    return favoriteMovies;
  }
  public async deleteAllFavorites() {
    await this._storage.clear();
    this.logAllMovies();
  }
  public async deleteOneFavorite(movie: Movie) {
    await this._storage.remove(movie.title);
  }
  private logAllMovies() {
    console.log('Favorite Movie : ');
    // eslint-disable-next-line no-underscore-dangle
    this._storage.forEach((year, movie, index) => {
      console.log(year, movie, index);
    });
  }
}
