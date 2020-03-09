import { Injectable } from '@angular/core';
import { Teachers } from '../dto/teacher.dto';
import { Programs } from '../dto/program.dto';
import { Courses } from '../dto/corses.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient){
  }

  // Get Courses from api call
  public getCourses() {
    return this.http.get<Courses[]>("http://localhost:3000/api/getCourses");
  }

  // Get Programs from api call
  public getPrograms() {
    return this.http.get<Programs[]>("http://localhost:3000/api/getPrograms");
  }
  
  // Get teacher details from api call
  public getTeachers() {
    return this.http.get<Teachers[]>("http://localhost:3000/api/getTeachers");
  }
}
