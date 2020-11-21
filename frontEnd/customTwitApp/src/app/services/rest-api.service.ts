import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:4000/auth/twitter';

@Injectable()
export class RestApiService {

  constructor(private http: HttpClient) { }

  loginUser() {
    console.log('http://localhost:4000/auth/twitter');
    this.http.get(baseUrl).subscribe(res => {
      console.log(res);
    });
  }

  fetchTweets(days) {
    console.log(`${baseUrl}fetchTweets/${days}`);
    this.http.get(`${baseUrl}fetchTweets/${days}`);
  }
}
