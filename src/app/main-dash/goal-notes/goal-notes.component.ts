import { Component, OnInit } from '@angular/core';
import { DashboardManagerService } from 'src/app/main-dash/dashboard-manager.service';

@Component({
  selector: 'app-goal-notes',
  templateUrl: './goal-notes.component.html',
  styleUrls: ['./goal-notes.component.css']
})
export class GoalNotesComponent implements OnInit {
  NoteFiles = [];
  curr = 0;

  constructor(private DashManager: DashboardManagerService) { }

  ngOnInit(): void {
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
