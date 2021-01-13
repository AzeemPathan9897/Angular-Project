import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent implements OnInit {
  constructor() {}

  ngOnInit() {

  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }
  
}
