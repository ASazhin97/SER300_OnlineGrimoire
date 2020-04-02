import { Injectable } from '@angular/core';
import { MainDashComponent } from './main-dash.component'

@Injectable({
  providedIn: 'root'
})
export class DashboardManagerService {
  NoteFiles = [];
  currDash = 0;

  constructor() { 
    //get files from database, but using just some stuff to make it look okay right now
    this.NoteFiles.push({id: 1, Name:"Witcher", HoursPlayed:64, Notes: "Looking for Yennefer"});
  }

  getNotes(){
    return this.NoteFiles;
  }
}
