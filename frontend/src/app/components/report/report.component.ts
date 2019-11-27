import { Component, OnInit } from '@angular/core';
import { BudgetService, IReport } from '../budget.service';
import { Router } from '@angular/router';
import { AppURL } from '../../app.url'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  AppURL = AppURL;
  public reportItem: IReport[] = [];

  constructor(
    private budgetService: BudgetService,
    private router: Router
  ) { }

  ngOnInit() {
    this.budgetService.getReport()
    .subscribe(result => {
      // console.log(result)
      this.reportItem = result
    },
    excep => alert(excep.error.message))
  }

}
