import { Component, OnInit } from '@angular/core';
import { BudgetService, ITopic } from '../budget.service';
import { AppURL } from '../../app.url';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public model: ITopic;
  public TopicItem: ITopic[] = [];
  AppURL = AppURL;

  constructor(
    private budgetService: BudgetService
  ) { 
    this.model = this.budgetService.updateModelITopic
  }

  ngOnInit() {
    this.budgetService.getTopics()
    .subscribe(result => {
      // this.TopicItem = result['result']
      // console.log(result)
      this.TopicItem = result
    })
  }

  public onEditModal(item: ITopic){
    // console.log(item);
    Object.assign(this.budgetService.updateModelITopic, item);
  }

}
