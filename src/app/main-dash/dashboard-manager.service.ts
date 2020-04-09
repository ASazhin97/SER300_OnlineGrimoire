import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from '../server.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardManagerService {
  //temp using user1
  token = "sometoken"

  NoteFiles;
  currDash = 0;

  private messageSource = new BehaviorSubject('default message');
  current = this.messageSource.asObservable();

  private FilesSource = new BehaviorSubject('second');
  Files = this.FilesSource.asObservable();

  constructor(private server: ServerService) { 
    //get files from database, but using just some stuff to make it look okay right now
    this.updateNotes();
    this.setCurr(0);
  }

  updateNotes(){
    this.server.getAllGames(this.token).then((responce: any) => {
      
      this.NoteFiles = responce;
      console.log(this.NoteFiles);
      this.FilesSource.next(this.NoteFiles);
    })
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
    //this.messageSource.next(id)
  }
  
  //commands to database
  AddGame(game){
    console.log("add game to database");
    this.server.newGame(this.token, game.Name, game.HoursPlayed);
    this.updateNotes();
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
