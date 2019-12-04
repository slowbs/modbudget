import { Component, OnInit } from '@angular/core';
import { BudgetService, IActivity } from '../budget.service';
import { AppURL } from '../../app.url'

@Component({
  selector: 'app-reportactivity',
  templateUrl: './reportactivity.component.html',
  styleUrls: ['./reportactivity.component.css']
})
export class ReportactivityComponent implements OnInit {

  AppURL = AppURL;

  public ActivityItem: IActivity[] = [];

  constructor(
    private budgetSerivce: BudgetService
  ) { }

  ngOnInit() {
    this.budgetSerivce.getActivities()
      .subscribe(result => {
        this.ActivityItem = result['result']
        // console.log(this.ActivityItem)
      },
        excep => alert(excep.error.message)
      )
  }

}
