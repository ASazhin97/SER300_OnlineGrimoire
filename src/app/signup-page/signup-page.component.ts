import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  newUser = {
    FirstName:"",
    LastName:"",
    Username:"",
    Email:"",
    Password:"",
    Class:"",
    ReceiveNews:false
  }
  constructor(private server: ServerService) { }

  ngOnInit(): void {
  }

  public submit(user){
    console.log(user)
    console.log("creating user...")
    this.server.createNewUser(
      user.Username, 
      user.Password,
      user.Class,
      user.FirstName,
      user.LastName,
      user.ReceiveNews,
      user.Email);
  }

}
