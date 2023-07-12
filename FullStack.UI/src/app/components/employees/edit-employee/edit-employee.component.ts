import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  editEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }

  constructor(private activatedRoute: ActivatedRoute, private service: EmployeesService, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          this.service.getEmployeeById(id).subscribe({
            next: (response) => {
              this.editEmployeeRequest = response;
            }
          })
        }
      }
    });
  }

  editEmployee() {
    this.service.editEmployee(this.editEmployeeRequest.id, this.editEmployeeRequest).subscribe({
      next: () => {
        this.router.navigate(['employees']);
      }
    });
  }

  deleteEmployee(id: string) {
    this.service.deleteEmployee(id).subscribe({
      next: () => {
        this.router.navigate(['employees']);
      }
    })
  }
}
