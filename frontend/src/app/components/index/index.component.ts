import { Component, OnInit } from '@angular/core';
import { BudgetService, ITopic } from '../budget.service';
import { AppURL } from '../../app.url';
declare const $:any;

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

  public onDeleteModal(item: ITopic){
    // console.log(item);
    Object.assign(this.budgetService.deleteModelITopic, item);
  }

  onUpdateSubmit(){
    console.log(this.model)
    // this.budgetService
    // .putTopic(this.model.id, this.model)
    // .subscribe( result => {
    //   // console.log(result)
    //   $('#editListModal').modal('hide');
    //   // this.router.navigate(['/', AppURL.List, 1])
    //   // this.router.navigate(['/', AppURL.Index])
    //   this.ngOnInit();
    // },
    // excep => alert(excep.error.message)
    // )
  }

  onDeleteSubmit(){
    // console.log(this.budgetService.deleteModelITopic)
    this.budgetService
    .deleteTopic(this.budgetService.deleteModelITopic.id)
    .subscribe( result => {
      $('#deleteListModal').modal('hide')
      this.ngOnInit()
    },
    excep => alert(excep.error.message)
    )
  }

}
