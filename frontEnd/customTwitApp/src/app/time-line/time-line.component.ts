import { Component, OnInit } from '@angular/core';

import { RestApiService} from './../services/rest-api.service';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
  constructor(
    public restApiService: RestApiService,
  ) { }

  ngOnInit() {
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.restApiService.fetchTweetCompleted = false;
  }

  fetchTweets() {
    this.restApiService.fetchTweets();
  }

  loginUser() {
    this.restApiService.loginUser();
  }

  logoutUser() {
    this.restApiService.logoutUser();
  }

  urlOpen(url) {
    window.open(url);
  }
}
