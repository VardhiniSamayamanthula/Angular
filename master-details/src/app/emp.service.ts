import { Injectable } from '@angular/core';
import { EMPLIST } from './emp-mock';
import { Observable, of } from 'rxjs';
import { Emp } from './emp';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpService  {
  private  _url = 'http://localhost:8080/app/emp/list';
  private findUrl = "http://localhost:8080/app/emp/find/"
  private _saveUrl = "http://localhost:8080/app/emp/save"

  private arr:Emp[];

  constructor(private _http:HttpClient) { 
  }
 
 /* getEmpList() : Observable<Emp[]>{
    return of(EMPLIST);
  }*/

  getEmpList():Observable<Emp[]>{
    return this._http.get<Emp[]>(this._url);
  
  }

  findEmp(id:number):Observable<Emp>{
    console.log("find"+id);
    return this._http.get<Emp>(this.findUrl+id);
   // return of(EMPLIST.find(emp=>emp.id===id));
  }


  
  saveEmp(emp:Emp){
    return this._http.post<any>(this._saveUrl,emp);


  } 
}
