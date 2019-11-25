import { Component, OnInit } from '@angular/core';
import { AppURL } from '../../app.url'
import { BudgetService, IActivity, ITopic } from '../budget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formactivity',
  templateUrl: './formactivity.component.html',
  styleUrls: ['./formactivity.component.css']
})
export class FormactivityComponent implements OnInit {

  AppURL = AppURL;
  public ListTopic: ITopic[] = [];

  /** สร้าง model เอาไว้เก็บที่อยู่ใน input */
  public model: IActivity = {
    budgetno: '',
    name: '',
    activityno: '',
    balance: ''
  };

  constructor(
    private budgetService: BudgetService,
    private router: Router
  ) { }

  ngOnInit() {
    this.budgetService.getTopics()
      .subscribe(result => {
        // console.log(result)
        this.ListTopic = result
      },
        excep => alert(excep.error.message)
      )
  }

  onSubmit() {
    // console.log(this.model)
    this.budgetService.postActivity(this.model)
    .subscribe(result => {
      // console.log(result)
      this.router.navigate(['/',AppURL.Index])
    },
    excep => alert(excep.error.message)
    )}

}
