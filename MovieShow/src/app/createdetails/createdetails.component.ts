import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../services/movieservice.service';
import { Router } from '@angular/router';
import { Idetails } from '../model/idetails';

@Component({
  selector: 'app-createdetails',
  templateUrl: './createdetails.component.html',
  styleUrls: ['./createdetails.component.css']
})
export class CreatedetailsComponent implements OnInit {

  detailsdata : Idetails = { detailid : 0 , Actor: '' , movieid: 0 , gender : '' , Role : ''}
  showdata: any[] =[]

  constructor(private ms : MovieserviceService ,private router: Router) {

  }
  savedata(data : Idetails) : void {
    this.detailsdata = data
    //console.log(this.detailsdata)
    this.ms.addDetails(this.detailsdata).subscribe(
      () => {
        alert('Record Added Successfully')
        this.router.navigate(['/listmovies'])
      }
    )
  }

  ngOnInit() {
    this.ms.getAllMovies().subscribe(data => {this.showdata.push(...data) })
    console.log(this.showdata)
  }

}
