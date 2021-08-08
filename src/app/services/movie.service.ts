import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode',
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url = 'http://www.omdbapi.com/';
  apiKey = 'eb517ee';

  constructor(private http: HttpClient) {}

  searchData(title: string, type: SearchType): Observable<any> {
    return (
      this.http
        .get(
          `${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`
        )
        // eslint-disable-next-line @typescript-eslint/dot-notation
        .pipe(map((results) => results['Search']))
    );
  }

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
