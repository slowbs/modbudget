import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BudgetService, IProject, IWorkgroup } from '../budget.service';
import { ActivatedRoute } from '@angular/router';
import { AppURL } from '../../app.url';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-reportgroup',
  templateUrl: './reportgroup.component.html',
  styleUrls: ['./reportgroup.component.css']
})
export class ReportgroupComponent implements OnInit {

  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;
  title = 'Excel';
  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
  }

  AppURL = AppURL;

  public Header: [];
  private WorkgroupID: IWorkgroup = Object.assign({});
  public ProjectItem: IProject[] = [];

  constructor(
    private budgetService: BudgetService,
    private activateRoute: ActivatedRoute
  ) {
    this.activateRoute.params.forEach(queryParam => {
      this.WorkgroupID = queryParam.id
      // console.log(this.WorkgroupID)
    })
  }

  ngOnInit() {
    this.budgetService.getReportGreoup(this.WorkgroupID)
      .subscribe(result => {
        this.ProjectItem = result['result']
        // console.log(this.ProjectItem)
        this.Header = result['result2']
      },
        excep => alert(excep.error.message)
      )
  }

}
