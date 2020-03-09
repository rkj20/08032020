import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ProgramsComponent } from './programs/programs.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

// Routes for application
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent},
  { path: 'Courses', component: CoursesComponent},
  { path: 'Programs', component: ProgramsComponent},
  { path: 'Teachers', component: TeachersComponent},
  { path: 'ContactUs', component: ContactUsComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

