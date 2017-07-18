/**
 * Created by Rayvn on 7/10/2017.
 */


import { Component, Input } from '@angular/core';

@Component({
  selector: 'even-counter',
  template: `
    <br/>
    <span class="even"> <i class="fa fa-check-square-o" aria-hidden="true"></i> Even Number {{ gameCounter }} </span>
    <br/>
  `,
  styles:[`
    .even{
      color:red;
      font-size: 1.15em;
    }
   
  `]


})

export class AsgFourEvenComponent{
  @Input() gameCounter:number;

}
