/**
 * Created by Rayvn on 7/2/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'asg-one-warning',
  template:`
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="panel panel-warning">
            <div class="panel-heading panel-heading-warning">Warning!!!</div>
            <div class="panel-body">
              Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
            </div>
          </div>

        </div>
      </div>
      
    </div>
 
   
  
  `,
  styles:[`
    
    .panel-heading{
      color:#990000;
      font-size:1.25em;
      font-family: 'Audiowide', serif;
    }
    .panel-body{
      radius: 3px;
      border-left-width: 2px;
      border-left-style: solid;
      border-left-color: #990000;
      border-bottom-width: 3px;
      border-bottom-style: solid;
      border-bottom-color: #990000;
      min-height:175px;
    }
  `]


})

export class AsgOneWarningComponent{



}
