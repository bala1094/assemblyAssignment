import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { RestApiService} from './../services/rest-api.service';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
  fetchTweetInProgress: boolean;
  constructor(
    public restApiService: RestApiService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.restApiService.fetchTweetCompleted = false;
    this.fetchTweetInProgress = false;
  }

  fetchTweets() {
    this.spinner.show();
    this.restApiService.fetchTweets(() => {
      this.spinner.hide();
    });
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
