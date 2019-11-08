import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppURL } from './app.url';
import { IndexComponent } from './components/index/index.component';
import { FormComponent } from './components/form/form.component';


const routes: Routes = [
  { path: '', redirectTo: AppURL.Index, pathMatch: 'full'},
  { path: AppURL.Index, component: IndexComponent},
  { path: AppURL.Form, component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
