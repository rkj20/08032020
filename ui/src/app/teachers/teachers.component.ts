import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Teachers } from '../dto/teacher.dto';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  public teachers : Teachers[];

  constructor(private api: ApiService) {
    // Make the navbar fixed and apply  default style 
    if(document.getElementById("appNavBar").classList.contains('homeNavSetting')){
      document.getElementById("appNavBar").classList.remove('homeNavSetting');
    }
  }

  ngOnInit(): void {
    // Get the teachers from api
    this.api.getTeachers().subscribe((x: Teachers[])=>{
      this.teachers = x;
    });
  }
}
