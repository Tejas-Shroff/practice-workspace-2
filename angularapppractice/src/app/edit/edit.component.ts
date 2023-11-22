import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute , Router } from '@angular/router';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  moviedata : Movie ={
    id : 0,
    name : '',
    yearRelease :0,
    rating : 0
  }
  id : number

  constructor(private ms : MovieService , private ar : ActivatedRoute , private r : Router) { }

  saveData(Mdata : Movie) : void {
    this.moviedata = Mdata
    this.ms.editMovie(this.moviedata).subscribe(
      () => {

        alert("Record edited successfully")
        this.r.navigate(['ListMovies'])

      }
    )
  }
  gMovie( id : number ){
    this.ms.findMovie(id).subscribe((data : Movie) => this.moviedata = data )
  }

  ngOnInit() {
    const tid = this.ar.snapshot.paramMap.get('id')
    this.id = Number(tid)
    this.gMovie(this.id)
  }

}
