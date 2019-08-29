import { Component } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
selector:'app-test',
template:`<h1>Hello</h1>
<h2>{{msg}}</h2>`,
styles:[]
})
export class TestComponent  {
public message="test";
public msg : string;
constructor(private tservice : TestServiceService){

    }

    ngOnInit(){
        this.msg = this.tservice.greet();
    }

}