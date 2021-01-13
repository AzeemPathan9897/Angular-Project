import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validator, Validators} from '@angular/forms';
import { Students} from '../students';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';
@Component({
  selector: 'app-formbutton',
  templateUrl: './formbutton.component.html',
  styleUrls: ['./formbutton.component.css']
})
export class FormbuttonComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private _studentService:StudentsService, private router:Router) { }
  addForm:FormGroup;
  ngOnInit() {
    this.addForm=this.formBuilder.group({
      sId:[],
      fName:['',Validators.required],
      lName:['',Validators.required,Validators.maxLength(10)],
      email:['',Validators.required]
    });
  }
  onSubmit()
  {
    this._studentService.createstudent(this.addForm.value)
    .subscribe(data=>{
      this.router.navigate(['students'])
    })
    //console.log(this.addForm.value);
  }

}
  