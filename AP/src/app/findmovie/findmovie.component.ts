import { Component, OnInit } from '@angular/core';
import { MServiceService } from '../services/mservice.service';
import { Imovie } from '../model/imovie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-findmovie',
  templateUrl: './findmovie.component.html',
  styleUrls: ['./findmovie.component.css']
})
export class FindmovieComponent implements OnInit {

  constructor(private a : MServiceService,private ar : ActivatedRoute ,private r : Router) { }
  d : Imovie
  id : number

  ngOnInit() {
    const tid = this.ar.snapshot.paramMap.get('id')
    this.id =Number(tid)
    this.a.getMovie(this.id).subscribe((data : Imovie) => {
      this.d = data
    })
  }
  show(){
    this.r.navigate(['/listmovies'])
  }

}
