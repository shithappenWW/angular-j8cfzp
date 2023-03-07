import { Component, VERSION } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import { SharedService } from './shared.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
