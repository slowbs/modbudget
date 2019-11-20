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

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FormComponent,
    ListComponent,
    FormtotalComponent,
    FormmodalComponent,
    FormactivityComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
