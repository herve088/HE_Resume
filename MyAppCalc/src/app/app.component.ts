import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'MyAppCalc';

   public num1:number;
   public num2:number;
   public num3:number;

   add(){
    this.num3=this.num1+this.num2;
    }
   sub(){
       this.num3=this.num1-this.num2;
       }
   multi(){
       this.num3=this.num1*this.num2;
       }
   div(){
       this.num3=this.num1/this.num2;
       }
}
