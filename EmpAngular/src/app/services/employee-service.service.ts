import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ApplicationRef, Injectable, OnDestroy } from '@angular/core';
import { error } from 'protractor';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { IEmployee } from '../model/iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private url = 'https://8080-eccdeabbadafaabfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/Employee'

  constructor(private httpclient : HttpClient) { }

  getAllEmployees() : Observable<any[]> {

    return this.httpclient.get<any[]>(this.url + '/ListEmployees').pipe(catchError(this.handleError)); 


  }

  getEmployee(id : number) : Observable<IEmployee>{
    return this.httpclient.get<IEmployee>(this.url + '/ListEmployees' +id).pipe(catchError(this.handleError));
  }
  

  httpOptions = {headers : new HttpHeaders ({'content-type' : 'application/json'})};

  addEmployee(employeedata : IEmployee ) : Observable<IEmployee>{
    return this.httpclient.post<IEmployee>(this.url + '/AddEmployee' + employeedata + this.httpOptions).pipe(catchError(this.handleError));
  }



  editEmployee(employeedata : IEmployee) : Observable<IEmployee>{
    return this.httpclient.put<IEmployee>(this.url + '/EditEmployee'+ employeedata.id + employeedata + this.httpOptions).pipe(catchError(this.handleError));
  }



  deleteEmployee(id : number) : Observable<IEmployee>{
    return this.httpclient.delete<IEmployee>(this.url +'/DeleteEmployee' + id).pipe(catchError(this.handleError));
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








