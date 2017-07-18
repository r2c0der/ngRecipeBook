/**
 * Created by Rayvn on 7/11/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'asgfive',
  template: `
    <!--<rkmapp-navbar></rkmapp-navbar>-->
    <div class="container">
      <rkmapp-asg-sidenav></rkmapp-asg-sidenav>
      <h1>Assignment Five | Practicing Services </h1>
      <div class="row">
        <div col-lg-4 col-md-5>
          <asg-five-active-users></asg-five-active-users>
        </div>
        <div col-lg-4 col-md-5>
          <asg-five-inactive-users></asg-five-inactive-users>
        </div>
      </div>
    </div>
  `,
  styles:[`
  div.container{
    padding-top: 7em;
  }
  `]

})

export class AsgFiveComponent{

}
