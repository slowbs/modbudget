import { Injectable } from '@angular/core';
import { backendURL } from '../app.url';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  public updateModelIList: IList = Object.assign({});
  public updateModelITopic: ITopic = Object.assign({});
  public updateModelIActivity: IActivity = Object.assign({});
  public deleteModelIList: IList = Object.assign({});
  public deleteModelITopic: ITopic = Object.assign({});
  public deleteModelIActivity: IActivity = Object.assign({});

  private backendAPI: string = environment.production ?
  'http://61.19.202.217/modbudget/backend/api' :
  `${backendURL}/api/`;

  // private backendTopic: string = 'http://61.19.202.217/modbudget/backend/api/topic';
  private backendTopic: string = this.backendAPI + '/topic';
  // private backendList: string = `${backendURL}/api/list`;
  private backendList: string = this.backendAPI + '/list';
  private backendActivity: string = this.backendAPI + '/activity';
  private backendReport: string = this.backendAPI + '/report';

  constructor(
    private httpClient: HttpClient
  ) { }

  /** Topic */
  /** ดึงข้อมูลรายการทั้งหมด Topic */
  getTopics(){
    return this.httpClient.get<ITopic[]>(this.backendTopic);
  }

  postTopic(value: ITopic){
    return this.httpClient.post(this.backendTopic, value);
  }

  putTopic(id: any, value: ITopic){
    return this.httpClient.put(this.backendTopic, value, { params : { id } });
  }

  deleteTopic(id: any){
    return this.httpClient.delete(this.backendTopic, { params: { id } });
  }

  /** ดึงข้อมูลรายการทั้งหมด List */
  // getLists(){
  //   return this.httpClient.get<IList[]>(this.backendList);
  // }


  /** List */
  // getLists(id: any){
    getLists(budgetno: any, activityno: any ){
    return this.httpClient.get<IList[]>(this.backendList, { params: { budgetno, activityno }});
  }

  postList(value: IList){
    return this.httpClient.post(this.backendList, value);
  }

  putList(id: any, value: IList){
    return this.httpClient.put(this.backendList, value, { params : { id } });
  }

  deleteItem(id: any){
    return this.httpClient.delete(this.backendList, { params: { id } });
  }
  

  /** Activity */
  /** ดึงกิจกรรมทั้งหมดมาโชว์ใน form */
  getActivities(){
    return this.httpClient.get<IActivity[]>(this.backendActivity);
  }

  getActivity(activityno: any){
    return this.httpClient.get<IActivity[]>(this.backendActivity, { params: { activityno }});
  }

  postActivity(value: IActivity){
    return this.httpClient.post<IActivity[]>(this.backendActivity, value)
  }

  putActivity(id: any, value: IActivity){
    return this.httpClient.put(this.backendActivity, value, { params : { id } });
  }

  deleteActivity(id: any){
    return this.httpClient.delete(this.backendActivity, { params: { id } });
  }


  /** Report */
  getReport(){
    return this.httpClient.get<IReport[]>(this.backendReport);
  }
}

export interface IList {
  id?: string;
  datepick: Date;
  bookno: string;
  // type: string;
  budgetno: string;
  activityno: string;
  text: string;
  income?: string;
  outcome?: string;
  refund?: string;
  balance?: string;
  person: string;
  workgroup: string;
  note?: string;
  created?: string;
  updated?: string;

  // checked?: boolean; //สำหรับ checkbox เมื่อมีการ checkAll
}

export interface ITopic {
  id?: string;
  budgetno: string;
  name: string;
  balance?: string;
}

export interface IActivity {
  id?: string;
  activityno: string;
  budgetno: string;
  name: string;
  balance?: string;
}

export interface IReport{
  id: string;
  text: string;
  budgetno: string;
  activityno: string;
  name: string;
  income: string;
  sum_income1: string;
  m_10: string;
  m_11: string;
  m_12: string;
  m_1: string;
  m_2: string;
  m_3: string;
  sum_outcome1: string;
  balance1: string;
  per1: string;
  sum_income2: string;
  m_4: string;
  m_5: string;
  m_6: string;
  m_7: string;
  m_8: string;
  m_9: string;
  outcome: string;
  per2: string;
  totalbalance: string;
}