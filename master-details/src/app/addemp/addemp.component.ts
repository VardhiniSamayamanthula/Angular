import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  public emp : Emp;
 // private accountType
  constructor(private _empService : EmpService) { }

  ngOnInit() {
    this.emp = new Emp(1,'A','B',1);
  }

  onSubmit(){

    console.log("onsub"+this.emp);
    this._empService.saveEmp(this.emp).subscribe(data=>console.log(data));
  }

}
