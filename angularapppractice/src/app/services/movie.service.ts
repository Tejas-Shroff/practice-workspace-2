import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = ""

  constructor(private httpclient : HttpClient) { }

  getMovies() : Observable<any[]>{
    this.httpclient.get<any[]>(this.url + )
  }
}
