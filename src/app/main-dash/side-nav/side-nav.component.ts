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
    this.DashManager.Files.subscribe(message => this.setNoteFiles(message));
    this.NoteFiles = this.DashManager.getNotes();
    //console.log(this.NoteFiles);

  }

  

  setNoteFiles(files){
    //console.log("setting files");
    this.NoteFiles = files;
    //console.log(files);
  }

  switchDash(id){
    console.log("switching dash: "+ id);
    this.DashManager.setCurr(id);
  }

}
