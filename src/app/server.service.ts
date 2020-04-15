import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  domain;

  constructor(private http: HttpClient) { 
    this.domain = window.location.origin;
    if(environment && environment.serverUrl){
      console.log("Using development URL....")
      this.domain = String(environment.serverUrl).trim()
    }
  }

  private async request(method: string, url: string, data?: any) {
    //const token = await this.oktaAuth.getAccessToken();

    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  };

  

  //USER MANAGEMENT
  public createNewUser(u, p, c, f, l, n, e){
    return this.request('POST', `${this.domain}/users/new/?u=`+u+`&p=`+p+`&c=`+c+`&f=`+f+`&l=`+l+`&n=`+n+`&e=`+e);
  }

  public loginUser(n, p){
    return this.request('GET', `${this.domain}/users/login/?n=`+n+`&p=`+p);
  }

  public auth(t){
    return this.request('GET', `${this.domain}/users/login/?t=`+t);
  }

  //GAME DASHBOARD MANAGEMENT
  public getAllGames(t){
    return this.request('GET', `${this.domain}/dashboard/all/?t=`+t);
  }

  public newGame(t, n, h){
    return this.request('POST', `${this.domain}/dashboard/new/?t=`+t+`&n=`+n+`&h=`+h);
  }

  public updateGame(t, id, f, d){
    return this.request('PUT', `${this.domain}/dashboard/new/?t=`+t+`&id=`+id+`&f=`+f+`&d=`+d);
  }

  public deleteGame(t, id){
    return this.request('DELETE', `${this.domain}/dashboard/all/?t=`+t+`&id=`+id);
  }
}

