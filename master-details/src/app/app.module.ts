import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { EmplistComponent } from './emplist/emplist.component';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { EmpService } from './emp.service';
import { HttpClientModule } from '@angular/common/http';
import { DepService } from './dep.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepdetailsComponent } from './depdetails/depdetails.component';
import { AddempComponent } from './addemp/addemp.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpdetailsComponent,
    EmplistComponent,
    DeptlistComponent,
    PageNotFoundComponent,
    DashboardComponent,
    DepdetailsComponent,
    AddempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EmpService,
    DepService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
