import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class MserviceService {

  private url = ''

  constructor(private httpclient:HttpClient) { }
  getAllMovies() : Observable<any[]>{
    return this.httpclient.get<any[]>(this.url + '/ListMovies')

  }
}
