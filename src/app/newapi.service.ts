import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewapiService {

  constructor(private http:HttpClient) { }
  newmethod()
  {
    //return this.http.get<Newapi[]>("http://localhost/api/student.php");
  }
}

