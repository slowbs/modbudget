import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { FormComponent } from './components/form/form.component';
import { SharedsModule } from './shareds/shareds.module';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { FormtotalComponent } from './components/formtotal/formtotal.component';
import { FormmodalComponent } from './components/formmodal/formmodal.component';
import { FormactivityComponent } from './components/formactivity/formactivity.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ReportComponent } from './components/report/report.component';
import { ProjectComponent } from './components/project/project.component';

import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';
import { ReportgroupComponent } from './components/reportgroup/reportgroup.component';
import { WorkgroupComponent } from './components/workgroup/workgroup.component';
import { ReportactivityComponent } from './components/reportactivity/reportactivity.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FormComponent,
    ListComponent,
    FormtotalComponent,
    FormmodalComponent,
    FormactivityComponent,
    ActivityComponent,
    ReportComponent,
    ProjectComponent,
    SearchComponent,
    ReportgroupComponent,
    WorkgroupComponent,
    ReportactivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedsModule,
    HttpClientModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
