import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StudentsComponent } from './students/students.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationNewComponent } from './registration-new/registration-new.component';
import { TformComponent } from './tform/tform.component';
import { FormsModule } from '@angular/forms';
import { TdrivenComponent } from './tdriven/tdriven.component';
import { NewapiComponent } from './newapi/newapi.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormbuttonComponent } from './formbutton/formbutton.component';
@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    StudentsComponent,
    NotfoundComponent,
    RegistrationComponent,
    RegistrationNewComponent,
    TformComponent,
    TdrivenComponent,
    NewapiComponent,
    FormbuttonComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
