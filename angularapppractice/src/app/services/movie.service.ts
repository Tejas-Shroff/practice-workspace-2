import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = 'https://8080-eccdeabbadafaabfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/'

  constructor(private httpclient : HttpClient) { }

  getMovies() : Observable<any[]>{
    return this.httpclient.get<any[]>(this.url + 'ListMovies')
  }
  findMovie(id : number) : Observable<any[]>{
    return this.httpclient.get<any[]>(this.url + 'ListMovies' + id)
  }
  httpOptions = {headers : new HttpHeaders({'content-type' : 'application/json'})}
  addMovie( M : Movie) : Observable<Movie>{
    return this.httpclient.post<Movie>(this.url + 'AddMovies', M ,this.httpOptions)
  }
  editMovie(M : Movie) : Observable<Movie>{
    return this.httpclient.put<Movie>(this.url + 'EditMovies' , M.id , M , this.httpOptions)
  }
  
}
