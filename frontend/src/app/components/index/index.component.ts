import { Component, OnInit } from '@angular/core';
declare const App:any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    App.initialLoadPage();
  }

}
