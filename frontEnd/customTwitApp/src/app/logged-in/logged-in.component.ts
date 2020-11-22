import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { RestApiService} from './../services/rest-api.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {

  constructor(
    public restApiService: RestApiService,
    private router: Router
    ) { }

  ngOnInit() {
    this.restApiService.logInSuccess();
  }

}
