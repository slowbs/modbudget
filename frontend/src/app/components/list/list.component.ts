import { Component, OnInit } from '@angular/core';
import { BudgetService, IList } from '../budget.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public ListItem: IList[] = [];

  constructor(
    private budgetService: BudgetService
  ) { }

  ngOnInit() {
    this.budgetService.getLists()
    .subscribe(result => {
      this.ListItem = result
    })
  }

}
