import { Component, OnInit } from '@angular/core';
import { BudgetService, IList, IActivity, ITopic } from '../budget.service';
import { ActivatedRoute } from '@angular/router';
import { AppURL } from '../../app.url';
declare const $: any;

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    public modelInsert: IList = {
        bookno: '',
        text: '',
        datepick: new Date(),
        budgetno: '',
        activityno: '',
        projectno: '',
        income: '',
        outcome: '',
        refund: '',
        note: ''
    };

    AppURL = AppURL;
    public model: IList;
    public ListItem: IList[] = [];
    // public Id: IList = Object.assign({});
    public Activityno: IList = Object.assign({});
    public Budgetno: IList = Object.assign({});
    public Projectno: IList = Object.assign({});

    constructor(
        private budgetService: BudgetService,
        private activateRoute: ActivatedRoute
    ) {
        /** Param */
        this.activateRoute.params.forEach(queryParam => {
            // console.log(queryParam);
            this.Budgetno = queryParam.budgetno
            this.Activityno = queryParam.activityno
            this.Projectno = queryParam.projectno
            this.modelInsert.budgetno = queryParam.budgetno
            this.modelInsert.activityno = queryParam.activityno
            this.modelInsert.projectno = queryParam.projectno
            // console.log(this.Id)
        })
        this.model = this.budgetService.updateModelIList
    }

    ngOnInit() {
        this.budgetService.getLists(this.Budgetno, this.Activityno, this.Projectno)
            .subscribe(result => {
                this.ListItem = result
            })
        // this.datePicker()
    }

    public onEditModal(item: IList) {
        // console.log(item);
        Object.assign(this.budgetService.updateModelIList, item);
    }

    public onDeleteModal(item: IList) {
        // console.log(item);
        Object.assign(this.budgetService.deleteModelIList, item);
    }

    onInsertSubmit() {
        // console.log(this.modelInsert)
        this.budgetService
            .postList(this.modelInsert)
            .subscribe(result => {
                $('#insertListModal').modal('hide')
                this.ngOnInit()        
                this.onResetModel()
            })
    }

    onUpdateSubmit() {
        // this.modelInsert.datepick = new Date()
        // console.log(this.model)
        this.budgetService
            .putList(this.model.id, this.model)
            .subscribe(result => {
                // console.log(result)
                $('#editListModal').modal('hide');
                // this.router.navigate(['/', AppURL.List, 1])
                // this.router.navigate(['/', AppURL.Index])
                this.ngOnInit()
            },
                excep => alert(excep.error.message)
            )
    }

    /** เคลียค่า modal form */
    public onResetModel() {
        this.modelInsert.bookno = '',
        this.modelInsert.datepick = new Date(),
        this.modelInsert.text = '',
        this.modelInsert.income = '0',
        this.modelInsert.outcome = '0',
        this.modelInsert.refund = '0'
    }

    public onDelSubmit() {
        // console.log(this.budgetService.deleteModelIList)
        this.budgetService
        .deleteItem(this.budgetService.deleteModelIList.id)
        .subscribe(result => {
          this.ngOnInit();
          $('#deleteListModal').modal('hide');
        },
        excep => alert(excep.error.message))
    }

    // public datePicker() {
    //     $('#sandbox-container .input-group.date').datepicker({
    //         format: "dd/mm/yy",
    //         todayBtn: "linked",
    //         language: "th",
    //         autoclose: true,
    //         todayHighlight: true
    //     });
    // }

    public updateCalcs() {
        console.log()
    }


}
