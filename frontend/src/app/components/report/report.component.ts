import { Component, OnInit } from '@angular/core';
import { BudgetService, IReport } from '../budget.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  public reportItem: IReport[] = [];

  constructor(
    private budgetService: BudgetService
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
