import { Component, OnInit, Input } from '@angular/core';
import { BudgetService, IList, ITopic } from '../budget.service';
import { ListComponent } from '../list/list.component';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
declare const $:any;

@Component({
  selector: 'app-formmodal',
  templateUrl: './formmodal.component.html',
  styleUrls: ['./formmodal.component.css']
})
export class FormmodalComponent implements OnInit {

  @Input('getComp') getComp : ListComponent

  /** สร้างตัวแปร */
  public model:IList;
  public ListTopic: ITopic[] = [];

  constructor(
    private budgetService: BudgetService,
    private router: Router
  ) {
    this.model = this.budgetService.updateModel
  }

  ngOnInit() {
    this.onFormlist();
  }

  onSubmit(){
    this.budgetService
    .putList(this.model.id, this.model)
    .subscribe( result => {
      // console.log(result)
      $('#editListModal').modal('hide');
      // this.router.navigate(['/', AppURL.List, 1])
      this.router.navigate(['/', AppURL.Index])
    },
    excep => alert(excep.error.message)
    )
  }

  onFormlist(){
    this.budgetService.getTopics()
    .subscribe(result => {
      // console.log(result)
      this.ListTopic = result
    })
  }


}
