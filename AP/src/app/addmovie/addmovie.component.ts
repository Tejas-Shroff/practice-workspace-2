import { Component, OnInit } from '@angular/core';
import { Imovie } from '../model/imovie';
import { MServiceService } from '../services/mservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  p : Imovie = {id : 0 , name : '', rating : 0, yearRelease : 0}

  constructor(private a : MServiceService ,private ar : ActivatedRoute , private r :Router) { }
  saveData ()

  ngOnInit() {
  }

}
