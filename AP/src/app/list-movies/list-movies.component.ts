import { Component, OnInit } from '@angular/core';
import { MServiceService } from '../services/mservice.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  d: any[] = [];

  constructor(private a : MServiceService) { 
    
    this.a.getAllMovies().subscribe( data => {this.d.push(...data)})
    console.log(this.d)
  }

  ngOnInit() {
  }

}
