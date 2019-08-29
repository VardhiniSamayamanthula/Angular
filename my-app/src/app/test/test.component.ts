import { Component } from '@angular/core';

@Component({
    selector: 'my-comp',
    template: `<h1>{{message}}</h1> <h2>ID : {{emp.id}}</h2> <h2>Name : {{emp.name}}</h2>`,
    styles:['h2{color:blue}']

})

export class TestComponent {

    message = "Emp details"; 
    public emp={id:100,name:"vardhini",salary:"77777"}
    constructor() {

    }

}