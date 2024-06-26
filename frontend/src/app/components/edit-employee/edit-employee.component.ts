import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent {

  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };

  constructor(private route: ActivatedRoute,
    private employeeService: EmployeesService,
    private router: Router) {}
  
  ngOnInit(){
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
            this.employeeService.getEmployeeById(id).subscribe({
              next: (response) => { 
                this.employeeDetails = response;
               }
            })
        }
      }
    })
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails).subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      }
    })
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      }
    })
  }
}
