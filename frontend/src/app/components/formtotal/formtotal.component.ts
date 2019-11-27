import { Component, OnInit } from '@angular/core';
import { BudgetService, ITopic, IList } from '../budget.service';
import { Router } from '@angular/router';
import { AppURL } from '../../app.url';

@Component({
    selector: 'app-formtotal',
    templateUrl: './formtotal.component.html',
    styleUrls: ['./formtotal.component.css']
})
export class FormtotalComponent implements OnInit {

    value: Date;

    AppURL = AppURL;

    /** สร้าง model เอาไว้เก็บที่อยู่ใน input */

    constructor(
        private budgetService: BudgetService,
        private router: Router
    ) { }

    ngOnInit() {
        // this.value = 2019-09-09
    }

    onUpdateSubmit() {
        console.log(this.value);
    //     this.budgetService.postTopic(this.model)
    //         .subscribe(
    //             result => {
    //                 // console.log(result)
    //                 this.router.navigate(['/', AppURL.Index])
    //             },
    //             excep => alert(excep.error.message)
    //         )
    // }
}
}
