import { Component } from '@angular/core';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  employees = [];
  numberEmployees: number = 0;

  constructor(
    private _employee: EmployeesService
  ) { }
  
  getEmployees() {
    this._employee.getEmployees().subscribe(
      (response) => {
        this.employees.push(response);
        console.log(response);
      },
      (response) => console.log(response)
    );
    this.numberEmployees = this.employees.length;
  }

  getEmployees2() {
    // this.employees.push(this._employee.getEmployees2());
    console.log(this._employee.getEmployees2());
  }

}
