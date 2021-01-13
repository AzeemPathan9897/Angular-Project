import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from '../students';
import { StudentsService } from '../students.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor(private http:HttpClient,private _studentsServices:StudentsService) { }
  students:any;
  ngOnInit() {
    let resp=this.http.get("http://localhost/api/student.php");
    // resp.subscribe((data)=>console.log(data))  ;
    resp.subscribe((data)=>this.students=data);
  }
  delete(students:Students):void{
    this._studentsServices.deleteStudents(students.id).subscribe(data=>{
      this.students=this.students.filter(u=>u!==students);
    });

}
}