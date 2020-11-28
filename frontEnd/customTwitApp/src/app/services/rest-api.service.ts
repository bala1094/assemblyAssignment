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
    this.http.get(`${baseUrl}/fetchTweets`).subscribe(res => {
      this.tweetObjectSeparator(res);
    });
  }

  tweetObjectSeparator(tweets) {
    this.tweets = [];
    this.fetchTweetCompleted = true;
    let splittedText = [];
    for (const i in tweets) {
      if (tweets.hasOwnProperty(i)) {
        console.log(tweets[i]);
        if (tweets[i].full_text.includes('https')) {
          splittedText = tweets[i].full_text.split('https');
          splittedText[1] = 'https' + splittedText[1];

        } else if ( tweets[i].retweeted_status.full_text.includes('https')) {
          splittedText[0] =  tweets[i].full_text;
          splittedText[1] =  'https' +  tweets[i].retweeted_status.full_text.split('https')[1];
        } else {
          splittedText[0] =  tweets[i].full_text;
          splittedText[1] = null;
        }

        this.tweets.push({
          date: new Date(tweets[i].created_at),
          name: tweets[i].user.name,
          location: tweets[i].user.location,
          hashTag: tweets[i].entities.hashtags,
          text: splittedText[0],
          src_url: splittedText[1],
          profile_pic: tweets[i].user.profile_image_url_https
        });
      }
    }
    console.log(this.tweets);
  }
}
