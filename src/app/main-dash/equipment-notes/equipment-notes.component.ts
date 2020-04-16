import { Component, OnInit } from '@angular/core';
import { DashboardManagerService } from '../dashboard-manager.service';

@Component({
  selector: 'app-equipment-notes',
  templateUrl: './equipment-notes.component.html',
  styleUrls: ['./equipment-notes.component.css']
})
export class EquipmentNotesComponent implements OnInit {
  NoteFiles = [];
  curr = 0;


  constructor(private DashManager: DashboardManagerService) { }

  ngOnInit(): void {
    this.DashManager.current.subscribe(message => this.changeCurrShow(message));
    this.DashManager.Files.subscribe(message => this.updateNotes(message));
  }

  SaveNotes(game){
    this.DashManager.UpdateGame(game);
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
