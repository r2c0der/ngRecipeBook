import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";


/**** ASSIGNMENTS  **/
import { RKMAppAssignmentsComponent } from "./rkmapp-assignments.component";
import { AsgOneComponent } from "./assignment-one/asg-one.component";
import { AsgTwoComponent } from "./assignment-two/asg-two.component";
import { AsgThreeComponent } from "./assignment-three/asg-three.component";
import { AsgFourComponent } from "./assignment-four/asg-four.component";
import { AsgFiveComponent } from "./assignment-five/asg-five.component";



export const RKMAppAssignmentRoutes: Routes = [
  { path: 'assignments', component: RKMAppAssignmentsComponent },
  { path: 'asgone', component: AsgOneComponent },
  { path: 'asgtwo', component: AsgTwoComponent },
  { path: 'asgthree', component: AsgThreeComponent },
  { path: 'asgfour', component: AsgFourComponent },
  { path: 'asgfive', component:  AsgFiveComponent}

];

@NgModule({
  imports:[
    RouterModule.forChild(RKMAppAssignmentRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class RKMAppAssignmentsRoutesModule{}
