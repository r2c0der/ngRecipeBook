/**
 * Created by Rayvn on 7/10/2017.
 */

import { Component } from '@angular/core';

@Component({

  selector:'asg-four',
  template:`
    <!--<rkmapp-navbar></rkmapp-navbar>-->
    <div class="container">
      <rkmapp-asg-sidenav></rkmapp-asg-sidenav>
      <div class="row">
        <h1> Assignment Four | Practicing Property &amp; Event Binding/View Encapsulation </h1>
        <div class="col-md-8"> 
        <gamecontrol (gameClockStarted)="onGameClockStarted($event)">Game Control Component</gamecontrol>
        </div>
      </div>
      <div class="row">
        
        <div class="col-md-4">
          <odd-counter *ngFor="let oddNumber of oddNumbers" [gameCounter]="oddNumber">Odd Component</odd-counter>
        </div>
        <div class="col-md-4 col-md-pull-2">
     <even-counter *ngFor="let evenNumber of evenNumbers" [gameCounter]="evenNumber">Even Component</even-counter>
        </div>
      </div>

    </div>
  ` ,
  styles:[`
    .container{
      padding-top:7em;
    }
  `]

})

export class AsgFourComponent{

  oddNumbers:number[] = [];
  evenNumbers:number[] = [];

 onGameClockStarted(counter:number){
       if(counter%2==0){
         this.evenNumbers.push(counter);

       }else {
         this.oddNumbers.push(counter);

       }





 }

}
