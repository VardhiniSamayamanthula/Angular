import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `
  <h1 class='error'>binding works!</h1>

    <h2 [class]=style>binding works!</h2>
    <button (click) = 'onClick()'>change</button>
    <hr>
    <input  type = 'text' #tb1 [disabled] = isEnabled [(ngModel)]= 'message'>
    <button (click) = 'onClickFn()'>Enable</button>
    <button (click) = 'logMessage(tb1)'>Log</button>
    <button (click) = 'logGreet($event)'>greet</button>
    {{tb1.value}}
   

    
    
    
  `,
  styles: [`
  .error{
    color:red
  }
  .normal{
    color:green
  }
  `


  ]
})
export class BindingComponent implements OnInit {
  public style: string = "normal";
  public isEnabled : boolean = true;
  public val : string = "";
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.style == 'error'){
      this.style = 'normal';
      return;
    }

    if(this.style == 'normal'){
      this.style = 'error';
      return;
    }
  }


  onClickFn(){
    if(this.isEnabled){
      this.isEnabled = false;
      

    }else{
      this.isEnabled = true;
      
    }

  }

  logMessage(msg){
      console.log(msg.value);
  }

  logGreet(event){
      console.log(event);

  }

}
