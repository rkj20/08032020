import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ProgramsComponent } from './programs/programs.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ApiService } from './services/api.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    ProgramsComponent,
    TeachersComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    // For Routing
    AppRoutingModule,
    // For working with reactive forms
    FormsModule,
    ReactiveFormsModule,
    // For Http calls to api
    HttpClientModule
  ],
  providers: [
    ApiService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
