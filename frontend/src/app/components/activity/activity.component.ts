import { Component, OnInit } from '@angular/core';
import { BudgetService, IActivity } from '../budget.service';
import { ActivatedRoute } from '@angular/router';
import { AppURL } from '../../app.url'
declare const $:any;

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  public model: IActivity;
  AppURL = AppURL;

  public ActivityItem: IActivity[] = [];
  public Activityno: IActivity = Object.assign({});

  constructor(
    private budgetService: BudgetService,
    private activateRoute: ActivatedRoute
  ) {
    /** Param */
    this.activateRoute.params.forEach(queryParam => {
      // console.log(queryParam);
      this.Activityno = queryParam.activityno
      // console.log(this.Id)
    })

    this.model = this.budgetService.updateModelIActivity
  }

  ngOnInit() {
    this.budgetService.getActivity(this.Activityno)
      .subscribe(result => {
        // console.log(result)
        this.ActivityItem = result
      })
  }

  public onEditModal(item: IActivity) {
    // console.log(item);
    Object.assign(this.budgetService.updateModelIActivity, item);
  }

  public onDeleteModal(item: IActivity) {
    // console.log(item);
    Object.assign(this.budgetService.deleteModelIActivity, item);
  }

  onUpdateSubmit(){
    // console.log(this.model)
    this.budgetService
    .putActivity(this.model.id, this.model)
    .subscribe( result => {
      // console.log(result)
      $('#editListModal').modal('hide');
      // this.router.navigate(['/', AppURL.List, 1])
      // this.router.navigate(['/', AppURL.Index])
      this.ngOnInit();
    },
    excep => alert(excep.error.message)
    )
  }

  onDeleteSubmit(){
    // console.log(this.budgetService.deleteModelIActivity)
    this.budgetService
    .deleteActivity(this.budgetService.deleteModelIActivity.id)
    .subscribe( result => {
      $('#deleteListModal').modal('hide')
      this.ngOnInit()
    },
    excep => alert(excep.error.message)
    )
  }

}
