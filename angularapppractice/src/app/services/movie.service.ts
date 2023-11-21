import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = 'https://8080-eccdeabbadafaabfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/'

  constructor(private httpclient : HttpClient) { }

  getMovies() : Observable<any[]>{
    return this.httpclient.get<any[]>(this.url + 'ListMovies').pipe(catchError(this.handleError))
  }
  findMovie(id : number) : Observable<Movie>{
    return this.httpclient.get<Movie>(this.url + 'ListMovies' + id).pipe(catchError(this.handleError))
  }
  httpOptions = {headers : new HttpHeaders({'content-type' : 'application/json'})}
  addMovie( M : Movie) : Observable<Movie>{
    return this.httpclient.post<Movie>(this.url + 'AddMovie', M ,this.httpOptions)
  }
  editMovie(M : Movie) : Observable<Movie>{
    return this.httpclient.put<Movie>(this.url + 'EditMovie' + M.id , M , this.httpOptions)
  }
  handleError (error : HttpErrorResponse){
    var e = error.status + '\n' + error.statusText + '\n' + error.error
    alert(e)
    return throwError(e)
  }

  
}
