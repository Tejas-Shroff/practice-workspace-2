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

  p : Imovie = {Id : 0 , Name : '', Rating : 0, YearRelease : 0}

  constructor(private a : MServiceService ,private ar : ActivatedRoute , private r :Router) { }
  saveData (movie : Imovie) : void {
    this.a.addMovie(this.p).subscribe(() => {
      alert('Record added Sucessfully')
      this.r.navigate(['/listmovies'])
    })
  }

  ngOnInit() {
  }

}
