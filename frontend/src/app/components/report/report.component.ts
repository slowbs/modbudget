import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BudgetService, IReport } from '../budget.service';
import { Router } from '@angular/router';
import { AppURL } from '../../app.url';
import * as XLSX from 'xlsx';  

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;  
  title = 'Excel';  
  ExportTOExcel() {  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');  
  }  

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
