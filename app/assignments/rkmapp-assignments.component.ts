/**
 * Created by Rayvn on 7/2/2017.
 */
import { Component } from '@angular/core';


@Component({

template:`
  <div class="container">
    <rkmapp-asg-sidenav></rkmapp-asg-sidenav>
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <div class="caption">

            <span> <a routerLink="/asgone" class="asgTitle" style="cursor: pointer"> <h3>Assignment One</h3></a></span>
          </div>
          <img src="../../assets/captures/asgone.png" alt="Assignment One">
        
        </div>
      </div>   <!-- / row 1 col-1 | assignment one -->
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <div class="caption">

            <span> <a routerLink="/asgtwo" class="asgTitle" style="cursor: pointer"> <h3>Assignment Two</h3></a></span>
          </div>
          <img src="../../assets/captures/asgtwo.png" alt="Assignment Two">
         
        </div>
      </div>   <!-- /row 1 col-2 | assignment two -->
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <div class="caption">

            <span> <a routerLink="/asgthree" class="asgTitle" style="cursor: pointer"> <h3>Assignment Three</h3></a></span>
          </div>
          <img src="../../assets/captures/asgthree.png" alt="Assignment Three">

        </div> <!-- ASSIGNMENT 3 -->
      </div>   <!-- / row 1 col-3 | assignment three -->
    </div>  <!-- /row 1 -->
    
    <div class="row">
      <div class="col-lg-4 col-md-4">
      <div class="thumbnail">
        <div class="caption">

          <span> <a routerLink="/asgfour" class="asgTitle" style="cursor: pointer"> <h3>Assignment Four</h3></a></span>
        </div>
        <img src="../../assets/captures/asgfour.png" alt="Assignment Four">

      </div> <!-- ASSIGNMENT 4 -->
    </div>    <!-- /col-1 row 2 | assignment four -->
      <div class="col-lg-4 col-md-4">
        <div class="thumbnail">
          <div class="caption">

            <span> <a routerLink="/asgfive" class="asgTitle" style="cursor: pointer"> <h3>Assignment Five</h3></a></span>
          </div>
          <img src="../../assets/captures/asgfive.png" alt="Assignment Five">

        </div> <!-- ASSIGNMENT 5 -->
      </div>    <!-- /col-2 row 2 | assignment five -->
    </div>  <!-- /row 2 -->
  </div>  <!-- /container -->
  
`,
  styles:[`
    div.container{
      padding-top:7em;
    }

    .asgTitle a{
      text-decoration:none;
      color:#222222;
      margin-bottom:2em;
    }
    
    .asgTitle:hover{
      color:hotpink;
      text-decoration: underline;
      -moz-text-decoration-line: underline;
      text-decoration-style: wavy;
      -moz-text-decoration-color: crimson;
    }
    
    .thumbnail {
      padding-top:2em;
      min-height:315px;
    }
  
  
    h3{
      text-align: center;
    }   
  
  `]



})


export class RKMAppAssignmentsComponent{}
