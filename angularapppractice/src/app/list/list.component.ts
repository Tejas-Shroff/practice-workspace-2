import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  Mdata : any[] = []

  constructor(private ms : MovieService) { 

    this.ms.getMovies().subscribe(data => {this.Mdata.push(...data)})
    console.log(this.Mdata)
  }

  ngOnInit() {
  }

}
