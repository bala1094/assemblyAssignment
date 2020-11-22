import { Component, OnInit } from '@angular/core';
import { RestApiService} from './../services/rest-api.service';
import {UserCredentail} from './../models/userCredential';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  loggedIn: boolean;
  userDetails: UserCredentail;

  constructor(
    public restApiService: RestApiService,
    ) { }

  ngOnInit() {
    this.loggedIn = this.restApiService.userLoggedIn;
    this.userDetails = this.restApiService.userDetails;
  }

  loginUser() {
    this.restApiService.loginUser();
  }

  logoutUser() {
    this.restApiService.logoutUser();
  }

}
