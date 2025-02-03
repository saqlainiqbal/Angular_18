import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from "./component/add-employee/add-employee.component";
import { ListEmployeeComponent } from './component/list-employee/list-employee.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddEmployeeComponent, ListEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular18';
}
