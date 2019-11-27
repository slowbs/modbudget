import { Component, OnInit } from '@angular/core';
import { IList, BudgetService, ITopic, IActivity } from '../budget.service';
import { Router } from '@angular/router';
import { AppURL } from '../../app.url';
declare const $:any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  AppURL = AppURL;
  public ListBudget: ITopic[] = [];
  public ListActivity: IActivity[] = [];

  // public datepick = new Date();
    /** สร้าง model เอาไว้เก็บที่อยู่ใน input */
    public model:IList = {
      bookno: '',
      text: '',
      datepick: new Date(),
      budgetno: '',
      activityno: '',
      projectno: '',
      income: '0',
      outcome: '0',
      refund: '0',
      note: ''
    };

  constructor(
    private budgetService: BudgetService,
    private router: Router
  ) { }

  ngOnInit() {
   
    // this.datePicker();
    this.budgetFormList();
    this.activityFormList();

  }

  onSubmit(){
    // console.log(this.model);
    this.budgetService.postList(this.model)
    .subscribe(result => {
      // console.log(result)
      this.router.navigate(['/', AppURL.Index])
    },
    excep => alert(excep.error.message)
    )
  }
  
  budgetFormList(){
    this.budgetService.getTopics()
    .subscribe(result => {
      // console.log(result)
      this.ListBudget = result
    })
  }

  activityFormList(){
    this.budgetService.getActivities()
    .subscribe(result => {
      // console.log(result)
      this.ListActivity = result
    })
  }

  // public datePicker(){
  //   $('#sandbox-container .input-group.date').datepicker({
  //     format: "dd/mm/yy",
  //     todayBtn: "linked",
  //     language: "th",
  //     autoclose: true,
  //     todayHighlight: true
  // });
  // }

}
