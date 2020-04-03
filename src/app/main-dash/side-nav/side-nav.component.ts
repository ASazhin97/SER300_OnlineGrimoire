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
  constructor(private DashManager: DashboardManagerService, private dash: MainDashComponent) { }

  ngOnInit(): void {
    //get files from database, but using just some stuff to make it look okay right now
    this.NoteFiles = this.DashManager.getNotes();

  }

  switchDash(id){
    this.DashManager.setCurr(id);
  }

}
