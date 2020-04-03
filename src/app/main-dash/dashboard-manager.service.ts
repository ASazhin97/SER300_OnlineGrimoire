import { Injectable, EventEmitter, Output } from '@angular/core';
import { MainDashComponent } from './main-dash.component'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardManagerService {
  NoteFiles = [];
  currDash = 0;

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { 
    //get files from database, but using just some stuff to make it look okay right now
    this.NoteFiles.push({id: 1, Name:"Witcher", HoursPlayed:64, Notes: "Looking for Yennefer"});
    this.NoteFiles.push({id: 2, Name:"Doom", HoursPlayed:20, Notes: "Murdered Stuff"});
    this.setCurr(0);
  }

  getNotes(){
    return this.NoteFiles;
  }

  getCurr(){
    return this.currDash;
  }

  setCurr(id){
    //console.log("showing this id: " + id);
    this.currDash = id;
    this.messageSource.next(id)
  }
  
  //commands to database
  AddGame(game){
    console.log("add game to database");
    game.id = this.NoteFiles.length+1;
    console.log(game);
    this.NoteFiles.push(game);
  }

  DeleteGame(game){
    console.log("delete Game from database")
    console.log(game);
  }

  UpdateGame(game){
    console.log("update game in database")
    console.log(game);
  }

}
