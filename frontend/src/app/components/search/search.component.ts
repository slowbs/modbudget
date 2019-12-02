import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BudgetService, ITopic, IProject, IWorkgroup } from '../budget.service';
import { AppURL } from '../../app.url'
declare const $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  AppURL = AppURL;
  public Listworkgroup: IWorkgroup[] = [];

  public model: IProject;

  public modelperson: any = {
    person: ''
  }

  public modelproject: any = {
    project: ''
  }

  public ProjectItem: IProject[] = [];

  constructor(
    private budgetService: BudgetService
  ) {
    this.model = this.budgetService.updateModelProject
  }

  ngOnInit() {
    this.budgetService.getSearch()
      .subscribe(result => {
        console.log(result)
        this.ProjectItem = result['result']
      },
        excep => alert(excep.error.message))
    this.getWorkgroup()
  }

  onSearchProject() {
    // console.log(this.modelproject)
    this.budgetService.postSearch(this.modelproject)
      .subscribe(result => {
        this.ProjectItem = result
        // console.log(this.ProjectItem)
        this.modelproject.project = ''
      },
        excep => alert(excep.error.message))
  }

  onSearchPerson() {
    // console.log(this.modelperson)
    this.budgetService.postSearch(this.modelperson)
      .subscribe(result => {
        this.ProjectItem = result
        // console.log(this.ProjectItem)
        this.modelperson.person = ''
      },
        excep => alert(excep.error.message))
  }

  public getWorkgroup() {
    this.budgetService.getWorkgroup()
      .subscribe(result => {
        this.Listworkgroup = result
      })
  }

  public onEditModal(item: IProject) {
    // console.log(item);
    Object.assign(this.budgetService.updateModelProject, item);
  }

  public onDeleteModal(item: IProject) {
    // console.log(item);
    Object.assign(this.budgetService.deleteModelIProject, item);
  }

  onUpdateSubmit() {
    // console.log(this.model)
    this.budgetService
      .putProject(this.model.id, this.model)
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
    // console.log(this.budgetService.deleteModelIProject.id)
    this.budgetService
      .deleteProject(this.budgetService.deleteModelIProject.id)
      .subscribe(result => {
        $('#deleteListModal').modal('hide')
        this.ngOnInit()
      },
        excep => alert(excep.error.message)
      )
  }

}
