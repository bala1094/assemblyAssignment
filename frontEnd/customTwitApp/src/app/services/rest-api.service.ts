import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserCredentail} from './../models/userCredential';
import {Router} from '@angular/router';

const baseUrl = 'http://localhost:4000/auth';

@Injectable()
export class RestApiService {
  userLoggedIn = false;
  userDetails: UserCredentail;
  constructor(private http: HttpClient,
    private router: Router) { }

  loginUser() {
    window.open('http://localhost:4000/auth/twitter', '_self');
  }

  logoutUser() {
    window.open('http://localhost:4000/auth/logout', '_self');
    this.userLoggedIn = false;
  }

  logInSuccess() {
    this.userLoggedIn = true;
    // enable cookies using credentials option
    // this will pass the twitter shared user info to server
    // using passport, accessed the data and stored in db
    this.http.get(`${baseUrl}/login/success`, {withCredentials: true}).subscribe((res: any) => {
        if (res.user) {
          this.userDetails = res.user;
          console.log(this.userDetails._id);
          this.userLoggedIn = true;
          this.router.navigateByUrl('home');
        }
     }, (error => {
      this.userLoggedIn = false;
      alert('login failed');
      this.router.navigateByUrl('home');
     }));
  }

  fetchTweets(days) {
    console.log(`${baseUrl}fetchTweets/${days}`);
    this.http.get(`${baseUrl}fetchTweets/${days}`);
  }
}
