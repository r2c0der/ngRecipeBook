/**
 * Created by Rayvn on 7/3/2017.
 */
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/en-ie';


@Component({

  selector:'rkmapp-asgthree',
 templateUrl:"./asg-three.component.html",
  styles:[`
  div.container{
    padding-top:5em;
  }
    p{
      font-family:'Poppins',sans-serif;
      line-height: 150%;
      margin-top:3em;
      font-size:1.15em;
    }
    .log5{
      font-size:1.05;
      font-weight: bolder;
      background-color:mediumblue;
      color:white;
      padding:1em;
    }
    .log{
      font-size:1.05;
      font-weight: bolder;
      background-color:darkseagreen;
      color:white;
      padding:1em;
    }
  
  `]

})

export class AsgThreeComponent implements OnInit{
      isShowing = false;
      clicks = [];
      counter:number = 0;
      logOutput:string = "";

      constructor(){}
      ngOnInit(){}



  onToggle(){

   if(this.isShowing){
     this.isShowing = false;
     this.logClick();
   } else{
     this.isShowing = true;
     this.logClick();
   }

  }

  logClick(){
    this.counter++;
    let now = moment().format('MM/D/YYYY @ HH:mm:ss');
    let log = "click number: "+ this.counter +"  [" + now+"]";
    this.clicks.push(log);
  }



}
