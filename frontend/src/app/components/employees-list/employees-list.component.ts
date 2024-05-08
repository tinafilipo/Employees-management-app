import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {

  employees: Employee[] = [];
  
  constructor(private employeesService: EmployeesService) {};

  ngOnInit() {
    this.employeesService.getAllEmployees().subscribe({
      next: (employees) => {this.employees = employees}
    })
  }
}
