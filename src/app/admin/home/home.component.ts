import { Component, OnInit } from '@angular/core';

import {LoginComponent} from "../../login/login.component";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor(public authService: AuthService, public router: Router) {
  }
  logout() {
    this.authService.logout();
    console.log('exit');

  }
}


