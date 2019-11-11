import { Injectable } from '@angular/core';
import { backendURL } from '../app.url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private backendURL: string = `${backendURL}/api/list`;

  constructor(
    private httpClient: HttpClient
  ) { }

  /** ดึงข้อมูลรายการทั้งหมด */
  getItems(){
    return this.httpClient.get<IList[]>(this.backendURL);
  }
  
}

export interface IList {
  id?: string;
  datepick: Date;
  bookno: string;
  text: string;
  income: string;
  outcome: string;
  refund: string;
  balance?: string;
  note?: string;
  created?: string;
  updated?: string;

  // checked?: boolean; //สำหรับ checkbox เมื่อมีการ checkAll
}