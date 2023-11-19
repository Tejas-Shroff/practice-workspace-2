import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {

  constructor(private es : EmployeeServiceService , private ar : ActivatedRoute , private route : Router) { }

  
  ngOnInit() {
  }

}
