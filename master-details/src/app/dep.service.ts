import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dep } from './dep';
import { DEPLIST } from './dep-mock';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepService {
  private  _url = '/assets/data/department.json';
  constructor(private _http:HttpClient) { }

  getDepList():Observable<Dep[]> {
    //return this._http.get<Dep[]>(this._url);
  console.log(this._url);
    return of(DEPLIST);  
  }

  findDep(dno:number):Observable<Dep>{
    console.log("dno in service"+dno);
    return of(DEPLIST.find(dep=>dep.dno===dno));
  }
}
