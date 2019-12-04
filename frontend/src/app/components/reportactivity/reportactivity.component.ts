import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BudgetService, IActivity } from '../budget.service';
import { AppURL } from '../../app.url'
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-reportactivity',
  templateUrl: './reportactivity.component.html',
  styleUrls: ['./reportactivity.component.css']
})
export class ReportactivityComponent implements OnInit {

  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;  
  title = 'Excel';  
  ExportTOExcel() {  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');  
  }  

  AppURL = AppURL;

  public ActivityItem: IActivity[] = [];

  constructor(
    private budgetSerivce: BudgetService
  ) { }

  ngOnInit() {
    this.budgetSerivce.getActivities()
      .subscribe(result => {
        this.ActivityItem = result['result']
        // console.log(this.ActivityItem)
      },
        excep => alert(excep.error.message)
      )
  }

}
