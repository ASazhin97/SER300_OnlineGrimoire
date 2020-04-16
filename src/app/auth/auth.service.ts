import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token;

  constructor() { }

  setSessionToken(t){
    this.token = t;
  }

  getToken(){
    return this.token;
  }
}
