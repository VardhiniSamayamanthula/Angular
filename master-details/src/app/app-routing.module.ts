import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmplistComponent } from './emplist/emplist.component';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { DepdetailsComponent } from './depdetails/depdetails.component';
import { AddempComponent } from './addemp/addemp.component';


const routes: Routes = [
  {path:'',component :DashboardComponent},
  {path:'employees',component :EmplistComponent},
  {path:'addemp',component :AddempComponent},
  {path:'employees/:id',component :EmpdetailsComponent},
  {path:'departments',component : DeptlistComponent},
  {path:'departments/:dno',component : DepdetailsComponent},
  {path : '**' ,component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
