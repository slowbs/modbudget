import { Component, OnInit } from '@angular/core';
import { BudgetService, ITopic } from '../budget.service';
import { AppURL } from '../../app.url';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public TopicItem: ITopic[] = [];
  AppURL = AppURL;

  constructor(
    private budgetService: BudgetService
  ) { }

  ngOnInit() {
    this.budgetService.getTopics()
    .subscribe(result => {
      this.TopicItem = result
      // console.log(result)
    })
  }

}
