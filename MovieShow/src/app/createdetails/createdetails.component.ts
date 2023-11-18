import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../services/movieservice.service';

@Component({
  selector: 'app-createdetails',
  templateUrl: './createdetails.component.html',
  styleUrls: ['./createdetails.component.css']
})
export class CreatedetailsComponent implements OnInit {

  detailsdata : Idetails = { detailid : 0 , actor: '' , movieid: 0 , gender : '' , role : ''}
  showdata: any[] =[]

  constructor(private ms : MovieserviceService ,private router: Router) {

  }
  savedata(data : Idetails) : void {
    this.detailsdata = data
    //console.log(this.detailsdata)
    this.ms
  }

  ngOnInit() {
  }

}
