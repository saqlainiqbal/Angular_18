import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }
  apiURL: string = 'https://projectapi.gerasim.in/api/Complaint/';

  getAllDepartments(){
    return this.http.get(`${this.apiURL + 'GetParentDepartment'}`);
  }
  SaveNewDepartment(obj : any){
    return this.http.post(`${this.apiURL + 'AddNewDepartment'}` , obj);
  }
  updateDepartmentData(obj:any){
    return this.http.post(`${this.apiURL + 'UpdateDepartment'}`, obj);
  }
  deleteDepartment(id : any){
    return this.http.delete(`${this.apiURL + 'DeletedepartmentBydepartmentId?departmentId='}`, id)
  }
}
