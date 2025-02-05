import { Component  , OnInit} from '@angular/core';
import { AlertComponent } from '../resuableComponent/alert/alert.component';
import { MyButtonComponent } from '../resuableComponent/my-button/my-button.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-api',
  imports: [AlertComponent,MyButtonComponent, FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostAPIComponent implements OnInit {

  // https://projectapi.gerasim.in/index.html (API URL)
  getData(daata: any) {
    debugger;
  }
  ngOnInit(){
    this.getParentDepartment();
  }

  constructor(private http: HttpClient){

  }
 depatmentList : any[] = [];
  departmentObj: any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }

  onSubmit(){
    this.http.post('https://projectapi.gerasim.in/api/Complaint/AddNewDepartment', this.departmentObj).subscribe((response:any) => {
      if(response.result){
        alert("Department Created Successfully.")
        this.getParentDepartment();
      }else{
        alert(response.message);
      }
    })
  }

  getParentDepartment(){
    this.http.get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment').subscribe((res:any)=>{
      this.depatmentList = res.data;
    })
  }
  
}
