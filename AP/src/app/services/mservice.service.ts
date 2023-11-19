import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Imovie } from '../model/imovie';


@Injectable({
  providedIn: 'root'
})
export class MServiceService {

  private url = 'https://8080-eccdeabbadafaabfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/Movie';

  constructor(private httpclient : HttpClient) { }

  getAllMovies() : Observable<any[]> {
    return this.httpclient.get<any[]>(this.url +'/ListMovies');
  }
  getMovie(id : number) : Observable<Imovie>{
    return this.httpclient.get<Imovie>(this.url +'/ListMovies/' + id)
  }

  httpOptions = {headers : new HttpHeaders({'content-type' : 'application/json'})}
  addMovie(movie : Imovie) : Observable<Imovie>{
    return this.httpclient.post<Imovie>(this.url + '/ListMovies' + movie ,this.httpOptions)
  }
}
