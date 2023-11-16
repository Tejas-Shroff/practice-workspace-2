import { Component, OnInit } from '@angular/core';
import { IMovie } from '../model/imovie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

moviedata : IMovie = { id : 0 , name : '' , rating : 0 , yearRelease : 0 }

  constructor() { }

  ngOnInit() {
  }

}
