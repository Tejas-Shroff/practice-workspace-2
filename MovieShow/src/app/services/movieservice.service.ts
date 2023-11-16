import { Injectable } from '@angular/core';
import { IMovie } from '../model/imovie';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor() { }
}
