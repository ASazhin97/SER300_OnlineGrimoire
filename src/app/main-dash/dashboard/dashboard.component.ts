import { Component, OnInit } from '@angular/core';
import { DashboardManagerService } from '../dashboard-manager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  NoteFiles = [];
  curr = 0;

  constructor(private DashManager: DashboardManagerService) { }

  ngOnInit(): void {
    this.DashManager.current.subscribe(message => this.changeCurrShow(message));
    this.DashManager.Files.subscribe(message => this.updateNotes(message));
  }

  changeCurrShow(n){
    this.curr = n;
    //console.log("switch show gen notes " + this.curr);
  }

  updateNotes(notes){
    this.NoteFiles = notes;
    //console.log(this.NoteFiles);
  }



  switchDash(id){
    console.log("switching dash: "+ id);
    this.DashManager.setCurr(id);
  }

}
