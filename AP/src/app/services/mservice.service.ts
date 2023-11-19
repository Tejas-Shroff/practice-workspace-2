import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient , HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MServiceService {

  private url = 'https://8080-eccdeabbadafaabfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/Movie';

  constructor(private httpclient : HttpClient) { }

  getAllMovies() : Observable<any[]> {
    return this.httpclient.get<any[]>(this.url +'/ListMovies');
  }
}
