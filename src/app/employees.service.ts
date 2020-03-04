import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(
    private http: HttpClient
  ) {}

  getEmployees(): Observable<Employee> {    
    return new Observable<Employee>(
      subscriber => {
        const url = 'http://dummy.restapiexample.com/api/v1/employees';
        this.http.get(url).subscribe(response => {
          let e = new Employee();
          e.age = response['data'][0]['employee_age'];
          e.name = response['data'][0]['employee_name'];
          e.salary = response['data'][0]['employee_salary'];
          subscriber.next(e);
        });
      }        
    );
  }

  getEmployees2(): Employee {
      const url = 'http://dummy.restapiexample.com/api/v1/employees';
      this.http.get(url).subscribe(response => {
        let e = new Employee();
        e.age = response['data'][0]['employee_age'];
        e.name = response['data'][0]['employee_name'];
        e.salary = response['data'][0]['employee_salary'];
        console.log(e)
        return e as Employee;
      });
  }

  getImovel() {
    return [][0]
  }

}
