import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  NoteFiles = [];
  constructor() { }

  ngOnInit(): void {
    //get files from database, but using just some stuff to make it look okay right now
    this.NoteFiles.push({Name:"Witcher", HoursPlayed:64, Notes: "Looking for Yennefer"});

  }

}
