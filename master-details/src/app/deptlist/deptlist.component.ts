import { Component, OnInit } from '@angular/core';
import { Dep } from '../dep';
import { DEPLIST } from '../dep-mock';
import { DepService } from '../dep.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deptlist',
  templateUrl: './deptlist.component.html',
  styleUrls: ['./deptlist.component.css']
})
export class DeptlistComponent implements OnInit {
  public depList : Dep[] ;
  constructor(private _depService:DepService,private router: Router) { }

  ngOnInit() {
    this._depService.getDepList().subscribe(function(data){this.depList = data}.bind(this));
  }

  onClick(dep:Dep){
    //this.selectedEmp = emp;
    console.log("onclick fun"+dep.dno);
    this.router.navigate(['/departments',dep.dno]);
    console.log(dep);
  }

}
