import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EMPLIST } from '../emp-mock';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  public emplist : Emp[];
  public selectedEmp : Emp;
  constructor(private _empService:EmpService,private router:Router) { }

  ngOnInit() {
    /*this.emplist= this._empService.getEmpList();
    console.log(this.emplist);*/
    this._empService.getEmpList().subscribe(function(data){this.emplist = data}.bind(this));
  }

  onClick(emp:Emp){
    //this.selectedEmp = emp;
    console.log("emp in onclick"+emp.id);
    this.router.navigate(['/employees',emp.id])
    console.log(emp);
  }

}
