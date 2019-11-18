import { Component, OnInit } from '@angular/core';
import { BudgetService, IList } from '../budget.service';
import { ActivatedRoute } from '@angular/router';
import { AppURL } from '../../app.url';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  AppURL = AppURL;
  public ListItem: IList[] = [];
  public Id: IList = Object.assign({});

  constructor(
    private budgetService: BudgetService,
    private activateRoute: ActivatedRoute
  ) { 
        /** Param */
        this.activateRoute.params.forEach(queryParam => {
          // console.log(queryParam);
          this.Id = queryParam.id
          // console.log(this.Id)
        })
  }

  ngOnInit() {
    this.budgetService.getLists(this.Id)
    .subscribe(result => {
      this.ListItem = result
    })
  }

  public onEditModal(item: IList){
    // console.log(item);
    Object.assign(this.budgetService.updateModel, item);
  }

}
