import { Component, OnInit } from '@angular/core';
import { Dep } from '../dep';
import { ActivatedRoute } from '@angular/router';
import { DepService } from '../dep.service';

@Component({
  selector: 'app-depdetails',
  templateUrl: './depdetails.component.html',
  styleUrls: ['./depdetails.component.css']
})
export class DepdetailsComponent implements OnInit {
  public dep :Dep;
  constructor(private currentRoute :ActivatedRoute,private _depService : DepService) { }

  ngOnInit() {
    let dno = parseInt(this.currentRoute.snapshot.paramMap.get('dno'));
    //console.log(`emp id is ${id}`);
    this._depService.findDep(dno).subscribe(data=>this.dep=data);
    console.log("dep id is"+dno);
  }

}
