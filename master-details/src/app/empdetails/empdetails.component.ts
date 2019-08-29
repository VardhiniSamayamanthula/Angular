import { Component, OnInit, Input } from '@angular/core';
import { Emp } from '../emp';
import { ActivatedRoute } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
  //@Input() 
  public emp:Emp;
  
  constructor(private currentRoute :ActivatedRoute,private _empService : EmpService) { 
    console.log("in cons");
  }

  ngOnInit() {
    this.emp = new Emp(1,"enter input","enter city",111);

    let id = parseInt(this.currentRoute.snapshot.paramMap.get('id'));
    
    //console.log(`emp id iss ${id}`);
    this._empService.findEmp(id).subscribe(data=>this.emp=data);
    console.log("emp id is"+id);
  }

}
