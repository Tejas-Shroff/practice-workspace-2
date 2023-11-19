import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private httpclient : HttpClient) { }
  listmovies : Observable<any[]>{
    return this.httpclient.get.<any[]>(this.url + )
  }
}
