import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { FavoriteMoviesService } from 'src/app/services/favorite-movies.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  information = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private favoriteService: FavoriteMoviesService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.getDetails(id).subscribe((reusult) => {
      this.information = reusult;
    });
  }
  addToFavoriteList() {
    this.favoriteService.saveMovieToFavorite(
      this.information.Title,
      this.information.Year,
      this.information.Poster
    );
    this.router.navigate(['/favorites']);
  }
  myFavoriteList() {
    this.router.navigate(['/favorites']);
  }
}
