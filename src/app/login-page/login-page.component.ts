import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(username, password){
    //this will be turned into an actual login once a a database and service is created
    console.log(this.user)
    this.router.navigateByUrl('/dash')
  }

}
