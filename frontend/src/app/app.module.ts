import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { FormComponent } from './components/form/form.component';
import { SharedsModule } from './shareds/shareds.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
