import { TestBed } from '@angular/core/testing';

import { FavoriteMoviesService } from './favorite-movies.service';

describe('FavoriteMoviesService', () => {
  let service: FavoriteMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
