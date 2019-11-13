import { Component, OnInit } from '@angular/core';
import { BudgetService, ITopic } from '../budget.service';
import { Router } from '@angular/router';
import { AppURL } from '../../app.url';

@Component({
    selector: 'app-formtotal',
    templateUrl: './formtotal.component.html',
    styleUrls: ['./formtotal.component.css']
})
export class FormtotalComponent implements OnInit {

    AppURL = AppURL;

    /** สร้าง model เอาไว้เก็บที่อยู่ใน input */
    public model: ITopic = {
        budgetno: '',
        name: '',
        balance: ''
    };

    constructor(
        private budgetService: BudgetService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    onSubmit() {
        // console.log(this.model);
        this.budgetService.postTopic(this.model)
            .subscribe(
                result => {
                    // console.log(result)
                    this.router.navigate(['/', AppURL.Index])
                },
                excep => alert(excep.error.message)
            )
    }
}
