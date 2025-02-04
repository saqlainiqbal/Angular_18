import { Component } from '@angular/core';
import { AddEmployeeComponent } from "./component/add-employee/add-employee.component";
import { ListEmployeeComponent } from './component/list-employee/list-employee.component';
import { DataBindingComponent } from "./component/data-binding/data-binding.component";
import { StructuralDirComponent } from "./component/directive/structural-dir/structural-dir.component";

@Component({
  selector: 'app-root',
  imports: [ AddEmployeeComponent, ListEmployeeComponent, DataBindingComponent, StructuralDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular18';
}
