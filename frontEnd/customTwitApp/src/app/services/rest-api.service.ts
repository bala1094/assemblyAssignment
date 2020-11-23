import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserCredentail} from './../models/userCredential';
import {Router} from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

const baseUrl = 'http://localhost:4000/auth';

@Injectable()
export class RestApiService {
  tweets: any[] = [];
  userLoggedIn = false;
  userDetails: UserCredentail;
  fetchTweetCompleted: boolean;

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
    // enable cookies using credentials option
    // this will pass the twitter shared user info to server
    // using passport, accessed the data and stored in db
    this.http.get(`${baseUrl}/login/success`, {withCredentials: true}).subscribe((res: any) => {
        if (res.user) {
          this.userDetails = res.user;
          console.log(this.userDetails);
          this.userLoggedIn = true;
          this.router.navigateByUrl('home');
        }
     }, (error => {
      this.userLoggedIn = false;
      alert('login failed');
      this.router.navigateByUrl('home');
     }));
  }

  fetchTweets() {
    this.tweets = [];
    console.log(`${baseUrl}/fetchTweets`);
    this.http.get(`${baseUrl}/fetchTweets`).subscribe(res => {
      this.fetchTweetCompleted = true;
        for (const i in res) {
          if (res.hasOwnProperty(i)) {
            console.log(res[i]);
            this.tweets.push({
              date: new Date(res[i].created_at),
              // srcUrl: res[i].text.match(/(https?:\/\/[^ ]*)/)[0],
              name: res[i].user.name,
              location: res[i].user.location,
              hashTag: res[i].entities.hashtags
            });
          }
        }
        console.log(this.tweets);
    });
  }
}
