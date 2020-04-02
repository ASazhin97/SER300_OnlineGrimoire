import { Component, OnInit } from '@angular/core';
import { DashboardManagerService } from './dashboard-manager.service';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit {
  FileNotes = [];
  curr = 0;
  dash = false;

  constructor(private DashManger: DashboardManagerService) { }

  ngOnInit(): void {
    this.FileNotes = this.DashManger.getNotes();
    this.setCurrentShow(0);
  }

  setCurrentShow(id){
    this.curr = id;
    if(this.curr == 0){
      this.dash = true;
    } else {
      this.dash = false;
    }
  }

}
