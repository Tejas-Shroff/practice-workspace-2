import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../model/movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  moviedata : Movie = {
    id : 0,
    name : '',
    yearRelease : 0,
    rating : 0
  }

  Mdata : Movie[] =[]

  constructor(private ms : MovieService , private ar : ActivatedRoute , private r : Router) { }

  saveData(Mdata : Movie) : void {

    this.moviedata = Mdata

    this.ms.addMovie(this.moviedata).subscribe(
      () => {

        alert("Record added Successfully")
        this.r.navigate(['ListMovies'])
        
      }
    )
  }

  

  ngOnInit() {
  }

}
