import { Component  , OnInit} from '@angular/core';
import { AlertComponent } from '../resuableComponent/alert/alert.component';
import { MyButtonComponent } from '../resuableComponent/my-button/my-button.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from '../../service/department.service';

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

  constructor(private http: HttpClient , private departmentService: DepartmentService){

  }
 depatmentList : any[] = [];
  departmentObj: any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }

  onSubmit(){
    this.departmentService.SaveNewDepartment(this.departmentObj).subscribe((response:any) => {
      if(response.result){
        alert("Department Created Successfully.")
        this.getParentDepartment();
      }else{
        alert(response.message);
      }
    })
  }
  onUpdatedata(){
    this.departmentService.updateDepartmentData(this.departmentObj).subscribe((response:any) => {
      if(response.result){
        alert("Department Updated Successfully.")
        this.getParentDepartment();
      }else{
        alert(response.message);
      }
    })
  }
  onDelete(id : number){
  const isDelete = confirm("Are you sure You want to delete?");
  if(isDelete){
    this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" +id).subscribe((res:any)=>{
      if(res.result){
        alert("Department Deleted Successfully.")
        this.getParentDepartment();
      }else{
        alert(res.message);
      }
    })
  }
  }

  getParentDepartment(){
    this.departmentService.getAllDepartments().subscribe((res:any)=>{
      this.depatmentList = res.data;
    })
  }
  onUpdate(data : any){
    this.departmentObj = data;
  }
  
}
