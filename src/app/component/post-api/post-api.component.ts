import { Component } from '@angular/core';
import { AlertComponent } from '../resuableComponent/alert/alert.component';
import { MyButtonComponent } from '../resuableComponent/my-button/my-button.component';

@Component({
  selector: 'app-post-api',
  imports: [AlertComponent,MyButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostAPIComponent {
  getData(daata: any) {
    debugger;
  }
  
}
