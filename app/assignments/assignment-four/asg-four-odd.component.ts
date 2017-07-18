/**
 * Created by Rayvn on 7/10/2017.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'odd-counter',
  template: `
    <br/>
  <span class="odd"> <i class="fa fa-check-circle-o" aria-hidden="true"></i> Odd Number {{ gameCounter }} </span>
    <br/>
  `,
  styles:[`
 
    .odd{
      color:blue;
      font-size: 1.25em;
      padding-top: 3em;
      margin-left: 1em;
      
    }
    
  `]


})

export class AsgFourOddComponent{
  @Input() gameCounter:number;


}
