import { Component, OnInit } from '@angular/core';
import { RestApiService} from './../services/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public restApiService: RestApiService,
    ) { }

  ngOnInit() {
    // this.restApiService.loginUser();
  }

  loginUser() {
    this.restApiService.loginUser();
  }

}
