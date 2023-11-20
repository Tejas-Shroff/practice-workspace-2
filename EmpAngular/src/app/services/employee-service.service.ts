import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'protractor';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private url = 'https://8080-eccdeabbadafaabfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/Employee'

  constructor(private httpclient : HttpClient) { }

  getAllEmployees() : Observable<any[]> {

    return this.httpclient.get<any[]>(this.url + '/ListEmployees').pipe(catchError(this.handleError));


  }

  handleError (error : HttpErrorResponse){

    var errormessage = error.status + '\n' + error.statusText + '\n' + error.error ;

    alert(errormessage)
    return throwError (errormessage)

  }

 
  
}














// handleError(error : HttpErrorResponse){

//   var errormessage = error.status + '\n' + error.statusText + '\n' +error.error 

//   alert(errormessage)
//   return throwError (errormessage)

// }








