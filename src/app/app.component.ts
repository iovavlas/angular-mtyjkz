import { Component } from '@angular/core';

@Component({
  /* Component properties */
  selector: 'my-app-root',          // CSS-Selector -> HTML-Element (template) in 'index.html' 
  //templateUrl: './app.component.html',        // Content of HTML-Element 
  //template: '<h1 class="app"> Rendering App-root component... </h1>',  
  template: `               
      <div class="app"> 
        <h1> Rendering App-root component... </h1> 
        <p> Hello... {{ title }} !</p>
        <div>
          <h2> - Interpolation & expressions - </h2> 
          {{ Num1 + Num2 + '!' }} 
          {{ isHappy ? ';)' : ':(' }}
        </div>
        <div>
          <h2> - Property (One way) binding - </h2> 
          <span> {{ title }} </span> 
          <span [innerHTML]="title"> </span> 
          <div>
            <input type="text"   value=""          placeholder="Input field">
            <input type="text"  [value]=inputText  placeholder="Input field">
            <div> You entered: {{inputText}} </div>
          </div>
        </div> 
        <div>
          <h2> - Event binding - </h2> 
          <input type="text"  [value]=eventInputText  
            (input)="handleInput($event)" placeholder="Input field">
          <div> You entered: {{eventInputText}} </div>
          <button (click)="handleClickDelete()"> Delete </button>
        </div> 
      </div>`,
  styleUrls: [ './app.component.css' ]  // CSS-file for this Component  
})
export class AppComponent  {
  title: string = ''; 
  Num1: number = 1;
  Num2: number = 2;
  isHappy: boolean = true;
  logoUrl: string = 'img/logo.svg';
  inputText: string = 'Enter some Text...';
  eventInputText: string = 'Event...'

  constructor() {
    this.title = 'Ultimate Angular'; 
  }

  handleInput(event: any) :void {
    this.eventInputText = event.target.value;
  }

  handleClickDelete() :void {
    this.eventInputText = '';
  }
}
console.log('test', this);
