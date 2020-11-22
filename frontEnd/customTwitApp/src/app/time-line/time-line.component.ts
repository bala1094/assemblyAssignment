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
  fetchTweets() {
    this.restApiService.fetchTweets();
  }
}
