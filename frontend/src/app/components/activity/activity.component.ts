import { Component, OnInit } from '@angular/core';
import { BudgetService, IActivity } from '../budget.service';
import { ActivatedRoute } from '@angular/router';
import { AppURL } from '../../app.url'

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  AppURL = AppURL;  

  public ActivityItem: IActivity[] = [];
  public Activityno: IActivity = Object.assign({});

  constructor(
    private budgetSerivce: BudgetService,
    private activateRoute: ActivatedRoute
  ) {
    /** Param */
    this.activateRoute.params.forEach(queryParam => {
      // console.log(queryParam);
      this.Activityno = queryParam.activityno
      // console.log(this.Id)
    })
  }

  ngOnInit() {
      this.budgetSerivce.getActivity(this.Activityno)
        .subscribe(result => {
          console.log(result)
          this.ActivityItem = result
        })
      }

}
