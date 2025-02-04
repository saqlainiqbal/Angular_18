import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName: string = 'Angular 18';
  inputType = 'text';
  rollNumber: Number = 10;
  currentDate: Date = new Date();
  myClassName: string = 'bg-primary';
 firstName = signal("Saqlan iqbal");

showAlert(){
  alert('Button is clicked');
}
  constructor() {
  }

}
