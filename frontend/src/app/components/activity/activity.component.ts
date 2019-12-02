import { Component, OnInit } from '@angular/core';
import { BudgetService, IActivity } from '../budget.service';
import { ActivatedRoute } from '@angular/router';
import { AppURL } from '../../app.url'
declare const $: any;

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  private Header:[]

  public modelInsert: IActivity = {
    budgetno: '',
    name: '',
    activityno: '',
    balance: ''
  };

  public model: IActivity;
  AppURL = AppURL;

  public ActivityItem: IActivity[] = [];
  public Budgetno: IActivity = Object.assign({});

  constructor(
    private budgetService: BudgetService,
    private activateRoute: ActivatedRoute
  ) {
    /** Param */
    this.activateRoute.params.forEach(queryParam => {
      // console.log(queryParam);
      this.Budgetno = queryParam.budgetno
      this.modelInsert.budgetno = queryParam.budgetno
      // console.log(this.Budgetno, this.modelInsert.budgetno, queryParam.budgetno)
    })

    this.model = this.budgetService.updateModelIActivity
  }

  ngOnInit() {
    this.budgetService.getActivity(this.Budgetno)
      .subscribe(result => {
        // console.log(result)
        this.ActivityItem = result['result']
        this.Header = result['result2']
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

  onInsertSubmit() {
    // this.modelInsert.budgetno = this.Budgetno
    // console.log(this.modelInsert)
    this.budgetService
      .postActivity(this.modelInsert)
      .subscribe(result => {
        $('#insertListModal').modal('hide')
        this.ngOnInit()
        this.onResetModel()
      },
        excep => alert(excep.error.message)
      )
  }

  /** เคลียค่า modal form */
  public onResetModel() {
    this.modelInsert.activityno = ''
    this.modelInsert.name = ''
  }

  onUpdateSubmit() {
    // console.log(this.model)
    this.budgetService
      .putActivity(this.model.id, this.model)
      .subscribe(result => {
        // console.log(result)
        $('#editListModal').modal('hide');
        // this.router.navigate(['/', AppURL.List, 1])
        // this.router.navigate(['/', AppURL.Index])
        this.ngOnInit();
      },
        excep => alert(excep.error.message)
      )
  }

  onDeleteSubmit() {
    // console.log(this.budgetService.deleteModelIActivity)
    this.budgetService
      .deleteActivity(this.budgetService.deleteModelIActivity.id)
      .subscribe(result => {
        $('#deleteListModal').modal('hide')
        this.ngOnInit()
      },
        excep => alert(excep.error.message)
      )
  }

}
