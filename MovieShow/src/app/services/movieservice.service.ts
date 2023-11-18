import { Injectable } from '@angular/core';
import { IMovie } from '../model/imovie';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Idetails } from '../model/idetails';
import { HttpResponse } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  private url = 'https://8080-eccdeabbadafaabfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/Movie'
  private url1 = 'https://8080-eccdeabbadafaabfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/Detail'
  constructor(private httpclient:HttpClient) { }
  getAllMovies() : Observable<any[]>{
    return this.httpclient.get<any[]>(this.url+ '/ListMovies').pipe(catchError(this.handleError));
  }
  getMovie(id: number) : Observable<IMovie> {
    return this.httpclient.get<IMovie>(this.url + '/ListMovies/' +id).pipe(catchError(this.handleError));
  }
  httpOptions = {headers : new HttpHeaders({'content-type' : 'application/json'})}
  addMovie(moviedata : IMovie) : Observable<IMovie>{
    return this.httpclient.post<IMovie>(this.url +'/AddMovie',moviedata,this.httpOptions)
  }
  editMovie(moviedata : IMovie) : Observable<IMovie> {
    return this.httpclient.put<IMovie>(this.url + '/EditMovie/' + moviedata.id ,moviedata,this.httpOptions).pipe(catchError(this.handleError));
  }

  deleleMovie(id : number) : Observable<IMovie> {
    return this.httpclient.delete<IMovie> (this.url + '/DeleteMovie/' + id).pipe(catchError(this.handleError));
  }
  addDetails(detailsdata : Idetails) : Observable <Idetails>{
    return this.httpclient.post<Idetails>(this.url1 + '/AddDetails', detailsdata , this.httpOptions).pipe(catchError(this.handleError));
  }
  handleError (error : HttpErrorResponse){
    var errmsg = error.status + '\n' + error.statusText + '\n' + error.error
    alert(errmsg)
    return throwError (errmsg)
  }
  // showMovies() : Observable<any[]>{
  //   return this.httpOptions.get<any[]>(this.url +'/ShowMovies')
  // }
}
