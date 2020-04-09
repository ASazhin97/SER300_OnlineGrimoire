import { Component, OnInit, Input } from '@angular/core';
import { DashboardManagerService } from '../dashboard-manager.service';

@Component({
  selector: 'app-general-notes',
  templateUrl: './general-notes.component.html',
  styleUrls: ['./general-notes.component.css']
})
export class GeneralNotesComponent implements OnInit {

  NoteFiles = [];
  curr = 0;
  show = false;

  constructor(private DashManager: DashboardManagerService) { }

  ngOnInit(): void {
    //this.NoteFiles = this.DashManager.getNotes();
    //this.setCurr();
    //this.DashManager.current.subscribe(message => this.curr = parseInt(message));
    //this.DashManager.Files.subscribe(Array, message => this.NoteFiles = message);
  }

  SaveNotes(game){
    this.DashManager.UpdateGame(game);
  }

  DeleteNotes(game){
    this.DashManager.DeleteGame(game);
  }

}
