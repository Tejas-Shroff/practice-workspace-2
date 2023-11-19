import { Component, OnInit } from '@angular/core';
import { MServiceService } from '../services/mservice.service';
import { Imovie } from '../model/imovie';

@Component({
  selector: 'app-findmovie',
  templateUrl: './findmovie.component.html',
  styleUrls: ['./findmovie.component.css']
})
export class FindmovieComponent implements OnInit {

  constructor(private d : MServiceService,private ar : ActivatedRoute ,private r : Router) { }
  d : Imovie
  id : Number

  ngOnInit() {
  }

}
