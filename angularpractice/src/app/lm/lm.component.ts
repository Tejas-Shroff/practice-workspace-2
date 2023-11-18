import { Component, OnInit } from '@angular/core';
import { MserviceService } from '../services/mservice.service';

@Component({
  selector: 'app-lm',
  templateUrl: './lm.component.html',
  styleUrls: ['./lm.component.css']
})
export class LMComponent implements OnInit {

  data : any[] = []

  constructor(private a: MserviceService) { 

  this.a.getAllMovies().subscribe( d => {
    this.data.push(...d)})
    console.log(this.data);
  }

  ngOnInit() {
  }

}
