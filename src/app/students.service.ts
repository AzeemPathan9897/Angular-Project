import { Injectable } from '@angular/core';
import {Students} from '../app/students';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentsService 
{
  constructor(private http:HttpClient) { }
  getuser()
  {
    return this.http.get<Students[]>("http://localhost/api/student.php");
  }
  createstudent(student:Students)
  {
    return this.http.post("http://localhost/api/insert.php",student);
  }
  deleteStudents(id:number)
  {
    return this.http.delete<Students[]>("http://localhost/api/delete.php?id="+id);
  }
}
