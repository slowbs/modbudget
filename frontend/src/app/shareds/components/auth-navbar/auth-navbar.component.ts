import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppURL } from '../../../app.url'

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.css']
})
export class AuthNavbarComponent implements OnInit {

  AppURL = AppURL;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
