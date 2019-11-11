import { Component, OnInit } from '@angular/core';
import { IList } from '../budget.service';
declare const $:any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // public datepick = new Date();
    /** สร้าง model เอาไว้เก็บที่อยู่ใน input */
    public model:IList = {
      bookno: '',
      text: '',
      datepick: new Date(),
      income: '0',
      outcome: '0',
      refund: '0',
      note: ''
    };

  constructor() { }

  ngOnInit() {
   
    this.datePicker();

  }

  onSubmit(){
    console.log(this.model);
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
