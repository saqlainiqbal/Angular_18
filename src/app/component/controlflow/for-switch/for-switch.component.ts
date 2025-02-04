import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-switch',
  imports: [FormsModule],
  templateUrl: './for-switch.component.html',
  styleUrl: './for-switch.component.css'
})
export class ForSwitchComponent {
  dayNumber: string = ''; 
  cityArray: string [] = ['Islamabd','Karachi','Lahore','Multan'];

  studentList: any[] = [
    {studId:12, name:'Saqlain', city: 'Islamabd',   isActive:  false},
    {studId:22, name:'Tanveer', city: 'Karachi', isActive:  false},
    {studId:32, name:'Sania', city: 'Lahore', isActive:  true},
    {studId:56, name:'Bilal', city: 'Multan', isActive:  false},
    {studId:34, name:'Alex', city: 'London', isActive:  false},
    {studId:76, name:'Alene', city: 'Tokyo', isActive:  true},
  ]
  
}
