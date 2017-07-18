/**
 * Created by Rayvn on 7/2/2017.
 */

import { Component } from '@angular/core';
import { RKMAppNavbarComponent } from "../../ui/rkmapp-navbar.component";

@Component({

    template:`
      <!--<rkmapp-navbar></rkmapp-navbar>-->
      <div class="container">
        <rkmapp-asg-sidenav></rkmapp-asg-sidenav>
        <h1>Assignment One | Practicing Components</h1>
        <div class="row">
          <div class="col-md-6"> <asg-one-success></asg-one-success> </div>
          <div class="col-md-6"> <asg-one-warning></asg-one-warning></div>
        </div>
        
      </div>
    ` ,
  styles:[`
   .container{
     padding-top:7em;
   }
  `]

})

export class AsgOneComponent{


}
