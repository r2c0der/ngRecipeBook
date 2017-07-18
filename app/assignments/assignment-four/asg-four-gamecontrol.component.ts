/**
 * Created by Rayvn on 7/10/2017.
 */

import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'gamecontrol',
  template: `<h2><ng-content></ng-content></h2>
  

    <button type="button" class="btn btn-success btn-sm" (click)="startGame()">Start Game</button>
    <button type="button" class="btn btn-danger btn-sm" (click)="pauseGame()">Pause Game</button>
    <button type="button" class="btn btn-default btn-sm" (click)="resetCounter()">Reset Counter</button>

  
  `,
  styles:[`
  h2{
    color:purple;
    font-size: 1.35em;
    margin-left: 2em;
    
  }
  `]


})

export class AsgFourGamecontrolComponent{
  counter: number = 0;
  gameClock:any;
  @Output() gameClockStarted = new EventEmitter<number>();

  constructor(){}


  startGame() {
    console.log("Clock Started");
    this.gameClock = setInterval(() => {
      this.gameClockStarted.emit(this.counter);
      this.counter++;
      //console.log(this.counter);
    }, 1000);

  }

  pauseGame() {
    console.log("Clock Stopped");
    clearInterval(this.gameClock);



  }

  resetCounter(){
    //console.log("Counter reset");
    this.counter = 0;
    //console.log(this.counter);
  }


}
