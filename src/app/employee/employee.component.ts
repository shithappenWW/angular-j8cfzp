import { Component, OnInit } from '@angular/core';
import { SharedService, Employee } from '../shared.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.employees = this.sharedService.employees;
  }

  // Add methods to add, update, or delete employee data
}
