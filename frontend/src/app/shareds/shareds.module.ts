import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { AuthSidebarComponent } from './components/auth-sidebar/auth-sidebar.component';



@NgModule({
  declarations: [
    AuthNavbarComponent,
    AuthSidebarComponent],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot()
  ],
  exports:[
    BsDropdownModule,
    AuthNavbarComponent,
    AuthSidebarComponent
  ]
})
export class SharedsModule { }
