import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }

  constructor(private service: EmployeesService, private router: Router) {}

  ngOnInit() {

  }

  addEmployee() {
    this.service.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next: () => {
        this.router.navigate(['/employees']);
      }
    });
  }

}
