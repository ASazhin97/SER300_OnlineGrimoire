import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from '../server.service'
import { timer } from 'rxjs';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class DashboardManagerService {
  //temp using user1
  token = ""

  NoteFiles;
  currDash = 0;

  private messageSource = new BehaviorSubject('default message');
  current = this.messageSource.asObservable();

  private FilesSource = new BehaviorSubject('default message');
  Files = this.FilesSource.asObservable();

  constructor(private server: ServerService,
              private auth: AuthService) { 
    //get files from database, but using just some stuff to make it look okay right now
    this.token = this.auth.getToken();

    this.updateNotes();
    this.setCurr(0);
  }

  updateNotes(){
    console.log(this.token);
    this.server.getAllGames(this.token).then((responce: any) => {
      
      this.NoteFiles = responce;
      //console.log(this.NoteFiles);
      this.FilesSource.next(this.NoteFiles);
    })
  }

  updateToken(){
    this.token = this.auth.getToken();
    this.updateNotes();
  }

  getNotes(){
    return this.NoteFiles;
  }

  getCurr(){
    return this.currDash;
  }

  setCurr(id){
    this.currDash = id;
    this.messageSource.next(id)
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
