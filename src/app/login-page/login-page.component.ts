import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user = {
    username: '',
    password: ''
  }

  constructor(private router:Router, 
              private server: ServerService,
              private auth: AuthService) { }

  ngOnInit(): void {
  }

  login(username, password){
    //this will be turned into an actual login once a a database and service is created
    //console.log(username)
    //console.log(password)
    this.server.loginUser(username, password).then((responce: any) => {
      //console.log(responce)
      if(responce.length > 0){
        //console.log("login");
        this.auth.setSessionToken(responce[0].TokenID)
        this.router.navigateByUrl('/dash')
      }
    })
    
  }

}
