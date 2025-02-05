import { state } from '@angular/animations';
import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, JsonPipe, AsyncPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  currentRole: string = ".NET & Angular Developer"
  firstName: string = "This is demo of Angular 18."
  currentDate : Date = new Date();
  currentTime : Observable<Date> = new Observable<Date>;
  student: any = {
    name: 'saqlain iqbal',
    city: 'Islamabad',
    studentID: 786,
    state: null
  }
constructor(){
    this.currentTime = interval(1000).pipe(map(() => new Date()))
  }

}
