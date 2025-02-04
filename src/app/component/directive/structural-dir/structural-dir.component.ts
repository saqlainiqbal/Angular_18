import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-dir',
  imports: [CommonModule , FormsModule],
  templateUrl: './structural-dir.component.html',
  
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  constructor( private router: Router) { }
  navigatetoDataBinding(){
    this.router.navigateByUrl("/Data-Binding");
  }
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;
  num1: string = '';
  num2: string = '';
  isCheckBoxChecked: boolean = true;


  showDiv1(){
    this.isDiv1Visible = true;
  }
  hideDiv1(){
    this.isDiv1Visible = false;
  }

  toggleDiv2(){
    this.isDiv2Visible = !this.isDiv2Visible;
  }


}
