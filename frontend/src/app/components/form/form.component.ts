import { Component, OnInit } from '@angular/core';
declare const $:any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.datePicker();

  }

  public datePicker(){
    $('#sandbox-container .input-group.date').datepicker({
      format: "dd/mm/yy",
      todayBtn: "linked",
      language: "th",
      autoclose: true,
      todayHighlight: true
  });
  }

}
