import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  

  Mdata : any[] =[]

  constructor(private ms : MovieService) {

    this.ms.addMovie(this.Mdata).subscribe(
      () => {

      }
    )

  }

  ngOnInit() {
  }

}
