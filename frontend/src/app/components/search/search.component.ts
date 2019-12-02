import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BudgetService, ITopic, IProject } from '../budget.service';
import { AppURL } from '../../app.url'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  AppURL = AppURL;
  
  public modelperson: any = {
    person: ''
  }

  public modelproject: any = {
    project: ''
  }

  public ProjectItem: IProject[] = [];

  constructor(
    private budgetService: BudgetService
  ) { }

  ngOnInit() {
  }

  onSearchProject(){
    console.log(this.modelproject)
    this.budgetService.postSearch(this.modelproject)
    .subscribe(result => {
      this.ProjectItem= result
      console.log(this.ProjectItem)
    },
    excep => alert(excep.error.message))
  }

  onSearchPerson(){
    console.log(this.modelperson)
    this.budgetService.postSearch(this.modelperson)
    .subscribe(result => {
      this.ProjectItem = result
      console.log(this.ProjectItem)
    },
    excep => alert(excep.error.message))
  }

}
