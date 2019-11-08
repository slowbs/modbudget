import { Component, OnInit } from '@angular/core';
import { IList, BudgetService } from '../budget.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public ListItem: IList[] = [];

  constructor(
    private budgetService: BudgetService
  ) { }

  ngOnInit() {
    this.budgetService.getItems()
    .subscribe(result => {
      console.log(result)
    })
  }

}
