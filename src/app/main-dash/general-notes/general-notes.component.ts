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

  constructor(private DashManager: DashboardManagerService) { }

  ngOnInit(): void {
    //this.NoteFiles = this.DashManager.getNotes();
    //this.setCurr();
    this.DashManager.current.subscribe(message => this.changeCurrShow(message));
    this.DashManager.Files.subscribe(message => this.updateNotes(message));
  }

  SaveNotes(game, field, data){
    this.DashManager.UpdateGame(game, field, data);
  }

  changeCurrShow(n){
    this.curr = n;
    //console.log("switch show gen notes " + this.curr);
  }

  updateNotes(notes){
    this.NoteFiles = notes;
    //console.log(this.NoteFiles);
  }

  DeleteNotes(game){
    this.DashManager.DeleteGame(game);
  }

}
