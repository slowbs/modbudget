import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppURL } from './app.url';
import { IndexComponent } from './components/index/index.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { FormtotalComponent } from './components/formtotal/formtotal.component';
import { FormactivityComponent } from './components/formactivity/formactivity.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ReportComponent } from './components/report/report.component';


const routes: Routes = [
  { path: '', redirectTo: AppURL.Index, pathMatch: 'full'},
  { path: AppURL.Index, component: IndexComponent },
  { path: AppURL.Form, component: FormComponent },
  { path: AppURL.FormTotal, component: FormtotalComponent },
  { path: AppURL.List, component: ListComponent },
  // {path: ContentURL.Content + '/:id', component: ContentComponent }
  { path: AppURL.List + '/:budgetno' + '/:activityno', component: ListComponent },
  { path: AppURL.FormActivity, component: FormactivityComponent },
  { path: AppURL.Activity, component: ActivityComponent },
  { path: AppURL.Activity + '/:budgetno', component: ActivityComponent },
  { path: AppURL.Report, component: ReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
