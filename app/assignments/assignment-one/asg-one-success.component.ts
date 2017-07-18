/**
 * Created by Rayvn on 7/2/2017.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'asg-one-success',
  template:`
    <div class="container">
      <div class="row ">
        <div class="col-md-5">
          <div class="panel panel-success">
            <div class="panel-heading">Success!!!</div>
            <div class="panel-body">
              Louis, and thousands more like her, who has the grades, has the drive, has the will, but doesn't have the money to go to college. For we have a choice in this country. Around the world, we can turn dialogue into Interfaith service, so bridges between peoples lead to action - whether it is combating malaria in Africa, or providing relief after a natural disaster.
            </div>
          </div>

        </div>
      </div>
    </div>

    

  `,
  styles:[`  
 
    .panel-heading{
      font-size:1.25em;
      font-family: 'Righteous', serif;
    
    }
    .panel-body{
      radius: 3px;
      border-left-width: 2px;
      border-left-style: solid;
      border-left-color: #009900;
      border-bottom-width: 3px;
      border-bottom-style: solid;
      border-bottom-color: #009900;
      min-height:175px;
    }
  `]


})

export class AsgOneSuccessComponent{

}
