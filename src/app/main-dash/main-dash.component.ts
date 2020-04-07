import { Component, OnInit } from '@angular/core';
import { DashboardManagerService } from './dashboard-manager.service';
import { GeneralNotesComponent } from './general-notes/general-notes.component';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit {
  FileNotes = [];
  curr = 0;
  dash = false;

  constructor(private DashManager: DashboardManagerService) { }

  ngOnInit(): void {
    this.FileNotes = this.DashManager.getNotes();
    this.setCurrentShow(0);
    this.DashManager.currentMessage.subscribe(message => this.setCurrentShow(message));
  }

  setCurrentShow(id){
    this.curr = id;
    if(this.curr == 0){
      this.dash = true;
    } else {
      this.dash = false;
    }

    //set the showing id for the other components
    //this.genNotes.setCurr(id);

  }

}
