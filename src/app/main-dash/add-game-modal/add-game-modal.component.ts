import { Component, OnInit } from '@angular/core';
import { DashboardManagerService } from '../../dashboard-manager.service';

@Component({
  selector: 'app-add-game-modal',
  templateUrl: './add-game-modal.component.html',
  styleUrls: ['./add-game-modal.component.css']
})
export class AddGameModalComponent implements OnInit {
  game = {
    Name: '',
    HoursPlayed: '',
    Notes: ''
  };
  constructor(private DashManager: DashboardManagerService) { }

  ngOnInit(): void {
  }

  SaveGame(game){
    console.log("saveGame");
    this.DashManager.AddGame(game);
    game = {
      Name: '',
      HoursPlayed: '',
      Notes: ''
    };
  }

}
