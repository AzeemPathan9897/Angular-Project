import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentsComponent } from './students/students.component';
import { ContactComponent } from './contact/contact.component';
import { PipeComponent } from './pipe/pipe.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationNewComponent } from './registration-new/registration-new.component';
import { TformComponent } from './tform/tform.component';
import { TdrivenComponent } from './tdriven/tdriven.component';
import { NewapiComponent } from './newapi/newapi.component';
import { FormbuttonComponent } from './formbutton/formbutton.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'students',
    component:StudentsComponent,
  },
  {
    path:'formbutton',
    component:FormbuttonComponent,
  },
  {
    path:'contact',
    component:ContactComponent,
  },
  {
    path:'registration',
    component:RegistrationComponent,
  },
  {
    path:'registrationNew',
    component:RegistrationNewComponent,
  },
  {
    path:'tform',
    component:TformComponent,
  },
  {
    path:'tdriven',
    component:TdrivenComponent,
  },
  {
    path:'newapi',
    component:NewapiComponent,
  },
  
  {
    path:'**',
    component:NotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
