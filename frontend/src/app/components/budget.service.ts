import { Injectable } from '@angular/core';
import { backendURL } from '../app.url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private backendTopic: string = `${backendURL}/api/topic`;
  private backendList: string = `${backendURL}/api/list`;

  constructor(
    private httpClient: HttpClient
  ) { }

  /** ดึงข้อมูลรายการทั้งหมด Topic */
  getTopics(){
    return this.httpClient.get<ITopic[]>(this.backendTopic);
  }

  postTopic(value: IList){
    return this.httpClient.post(this.backendTopic, value);
  }

  /** ดึงข้อมูลรายการทั้งหมด List */
  getLists(){
    return this.httpClient.get<IList[]>(this.backendList);
  }

  postList(value: IList){
    return this.httpClient.post(this.backendList, value);
  }
  
}

export interface IList {
  id?: string;
  datepick: Date;
  bookno: string;
  type: string;
  text: string;
  income?: string;
  outcome?: string;
  refund?: string;
  balance?: string;
  note?: string;
  created?: string;
  updated?: string;

  // checked?: boolean; //สำหรับ checkbox เมื่อมีการ checkAll
}

export interface ITopic {
  id?: string;
  budgetno: string;
  name: string;
  balance: string;
}