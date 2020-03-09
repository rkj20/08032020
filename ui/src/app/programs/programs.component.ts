import { Component, OnInit } from '@angular/core';
import { Programs } from '../dto/program.dto';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  public programs : Programs[];

  constructor(private api: ApiService) {
    // Make the navbar fixed and apply  default style 
    if(document.getElementById("appNavBar").classList.contains('homeNavSetting')){
      document.getElementById("appNavBar").classList.remove('homeNavSetting');
    }   
  }

  ngOnInit(): void {
    // Get the programs from api
    this.api.getPrograms().subscribe((x: Programs[])=>{
      this.programs = x;
    });
  }
}
