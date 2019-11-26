import { Component, OnInit } from '@angular/core';
import { BudgetService, IProject } from '../budget.service';
import { ActivatedRoute } from '@angular/router';
import { AppURL } from '../../app.url'
declare const $: any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public modelInsert: IProject = {
    budgetno: '',
    activityno: '',
    projectno: '',
    name: '',
    balance: ''
  }

  public model: IProject;
  AppURL = AppURL;

  public ProjectItem: IProject[] = [];
  public Budgetno: IProject = Object.assign({});
  public Activityno: IProject = Object.assign({});

  constructor(
    private budgetService: BudgetService,
    private activiateRoute: ActivatedRoute
  ) {
    this.activiateRoute.params.forEach(queryParam => {
      this.Budgetno = queryParam.budgetno
      this.Activityno = queryParam.activityno
      this.modelInsert.budgetno = queryParam.budgetno
      this.modelInsert.activityno = queryParam.activityno
      // console.log(this.Budgetno, this.Activityno)
    })

    /** ดึงข้อมูล Edit modal */
    this.model = this.budgetService.updateModelProject
  }

  ngOnInit() {
    this.budgetService.getProject(this.Budgetno, this.Activityno)
      .subscribe(result => {
        // console.log(result)
        this.ProjectItem = result
      },
        excep => alert(excep.error.message))
  }

  public onEditModal(item: IProject) {
    // console.log(item);
    Object.assign(this.budgetService.updateModelProject, item);
  }

  public onDeleteModal(item: IProject) {
    // console.log(item);
    Object.assign(this.budgetService.deleteModelIProject, item);
  }

  onInsertSubmit() {
    // this.modelInsert.budgetno = this.Budgetno
    // console.log(this.model)
    this.budgetService
      .postProject(this.modelInsert)
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
    this.modelInsert.projectno = ''
    this.modelInsert.name = ''
  }

  onUpdateSubmit() {
    console.log(this.model)
    // this.budgetService
    //   .putProject(this.model.id, this.model)
    //   .subscribe(result => {
    //     // console.log(result)
    //     $('#editListModal').modal('hide');
    //     // this.router.navigate(['/', AppURL.List, 1])
    //     // this.router.navigate(['/', AppURL.Index])
    //     this.ngOnInit();
    //   },
    //     excep => alert(excep.error.message)
    //   )
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
