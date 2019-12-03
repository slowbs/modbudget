import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AppURL } from '../../app.url'
import { BudgetService, IWorkgroup } from '../budget.service';
import * as XLSX from 'xlsx';  

@Component({
  selector: 'app-workgroup',
  templateUrl: './workgroup.component.html',
  styleUrls: ['./workgroup.component.css']
})
export class WorkgroupComponent implements OnInit {

  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;  
  title = 'Excel';  
  ExportTOExcel() {  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');  
  }  

  AppURL = AppURL;
  public Listworkgroup: IWorkgroup[] = [];

  constructor(
    private budgetService: BudgetService
  ) { }

  ngOnInit() {
    this.budgetService.getWorkgroup()
      .subscribe(result => {
        this.Listworkgroup = result
        // console.log(this.Listworkgroup)
      },
        excep => alert(excep.error.message))
  }

}
