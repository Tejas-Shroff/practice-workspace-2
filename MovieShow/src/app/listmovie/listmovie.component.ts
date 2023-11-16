import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../services/movieservice.service';

@Component({
  selector: 'app-listmovie',
  templateUrl: './listmovie.component.html',
  styleUrls: ['./listmovie.component.css']
})
export class ListmovieComponent implements OnInit {

  constructor(private ms : MovieserviceService) {

    

  }

  ngOnInit() {
  }

}
