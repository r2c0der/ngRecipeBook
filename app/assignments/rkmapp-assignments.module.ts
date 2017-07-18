/**
 * Created by Rayvn on 7/14/2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule} from "@angular/common";
import { FormsModule } from '@angular/forms';

/** ASSIGNMENTS **/

import { RKMAppAssignmentsComponent } from "./rkmapp-assignments.component";
import { RKMAppAssignmentsRoutesModule } from "./rkmapp-assignments-routes.module";

import { AsgOneComponent } from "./assignment-one/asg-one.component";
import { AsgOneSuccessComponent } from "./assignment-one/asg-one-success.component";
import { AsgOneWarningComponent } from "./assignment-one/asg-one-warning.component";
import { AsgTwoComponent } from "./assignment-two/asg-two.component";
import { AsgThreeComponent } from "./assignment-three/asg-three.component";
import { AsgFourComponent } from "./assignment-four/asg-four.component";
import { AsgFourGamecontrolComponent } from "./assignment-four/asg-four-gamecontrol.component";
import { AsgFourOddComponent } from "./assignment-four/asg-four-odd.component";
import { AsgFourEvenComponent } from "./assignment-four/asg-four-even.component";
import { AsgFiveComponent } from "./assignment-five/asg-five.component";
import { AsgFiveActiveUsersComponent } from "./assignment-five/users/asg-five-active-users.component";
import { AsgFiveInactiveUsersComponent } from "./assignment-five/users/asg-five-inactive-users.component";
import { AsgFiveUsersService } from "./assignment-five/services/asg-five-users.service";
import { AsgFiveCounterService } from "./assignment-five/services/asg-five-counter.service";
import { RKMAppAssignmentsSideNavComponent } from "./rkmapp-assignments-sidenav/rkmapp-assignments-sidenav.component";



@NgModule({

  declarations:[
    RKMAppAssignmentsComponent,
    RKMAppAssignmentsSideNavComponent,
    AsgOneComponent,
    AsgOneSuccessComponent,
    AsgOneWarningComponent,
    AsgTwoComponent,
    AsgThreeComponent,
    AsgFourComponent,
    AsgFourGamecontrolComponent,
    AsgFourOddComponent,
    AsgFourEvenComponent,
    AsgFiveComponent,
    AsgFiveActiveUsersComponent,
    AsgFiveInactiveUsersComponent,


  ],
  imports:[
    CommonModule,
    FormsModule,
    RKMAppAssignmentsRoutesModule

  ],
  providers: [
    AsgFiveUsersService,
    AsgFiveCounterService
  ],




})
export class RKMAppAssignmentsModule{}
