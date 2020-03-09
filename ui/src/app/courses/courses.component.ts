import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Courses } from '../dto/corses.dto';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {

  public courses : Courses[];

  constructor(private api: ApiService) { 
    // Make the navbar fixed and apply  default style 
    if(document.getElementById("appNavBar").classList.contains('homeNavSetting')){
      document.getElementById("appNavBar").classList.remove('homeNavSetting');
    } 
    document.getElementById("appNavBar").style.boxShadow = 'none';  
  }

  ngOnInit(): void {
    // Get the courses from api
    this.api.getCourses().subscribe((x: Courses[])=>{
      this.courses = x;
    });
  }
  ngOnDestroy(){
    document.getElementById("appNavBar").style.boxShadow = '5px 5px 5px lightgray';
  }
}
