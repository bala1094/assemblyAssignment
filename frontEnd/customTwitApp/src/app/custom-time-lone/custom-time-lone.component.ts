import { Component, OnInit } from '@angular/core';
import { RestApiService} from './../services/rest-api.service';

@Component({
  selector: 'app-custom-time-lone',
  templateUrl: './custom-time-lone.component.html',
  styleUrls: ['./custom-time-lone.component.css']
})
export class CustomTimeLoneComponent implements OnInit {

  hashTags = [];
  filterHashTag = '';
  constructor(
    public restApiService: RestApiService,
    ) { }

  ngOnInit() {
    this.extractHashTags();
  }
  loginUser() {
    this.restApiService.loginUser();
  }

  logoutUser() {
    this.restApiService.logoutUser();
  }
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  extractHashTags() {
    this.restApiService.tweets.forEach(tweet => {
      tweet.hashTag.forEach(element => {
        this.hashTags.push(element.text);
      });
    });
    this.hashTags = this.hashTags.filter(this.onlyUnique);
  }

}
