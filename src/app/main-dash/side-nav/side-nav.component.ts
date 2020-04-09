import { Component, OnInit } from '@angular/core';
import { DashboardManagerService } from '../dashboard-manager.service'
import { MainDashComponent } from '../main-dash.component'
import { GeneralNotesComponent } from '../general-notes/general-notes.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  NoteFiles = [];
  constructor(private DashManager: DashboardManagerService) { }

  ngOnInit(): void {
    this.DashManager.Files.subscribe(Array, message => this.setNoteFiles(message));

  }

  setNoteFiles(files){
    console.log("setting files");
    this.NoteFiles = files;
    console.log(files);
  }

  switchDash(id){
    this.DashManager.setCurr(id);
  }

}
