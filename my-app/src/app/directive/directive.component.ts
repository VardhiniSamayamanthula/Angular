import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  template: `
  
     <div *ngFor = 'let color of colors;index as i'>
     <h1>{{i}}{{color}}</h1>
     </div>
    
    <div>
    <ul *ngFor = 'let color of colors;index as i'>
    <li><h1>{{i}}{{color}}</h1></li>
    </ul>
    </div>

    <h2 *ngIf = 'display;
    else nameRef'>vardhini</h2>
    <ng-template #nameRef>
    <h2>name hidden</h2>
    </ng-template>

    <hr>
    <div class = "container">
    <h2>Angular Pipes</h2>
    <h2>{{msg}}</h2>
    <h2>{{msg | uppercase}}</h2>
    <h2>{{msg | lowercase}}</h2>
    <h2>{{msg | titlecase}}</h2>
    <h2>{{object|json}}</h2>
    </div>


  `,
  styles: []
})
export class DirectiveComponent implements OnInit {
  public colors:string[] =['red','blue','green'];
  public display:boolean = false;
  public msg : string ="Hloo";
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  constructor() { }
  
  ngOnInit() {
  }

}
