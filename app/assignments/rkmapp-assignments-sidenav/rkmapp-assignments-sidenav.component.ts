/**
 * Created by Rayvn on 7/14/2017.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector:'rkmapp-asg-sidenav',
  templateUrl:'./rkmapp-assignments-sidenav.component.html',
  styleUrls:['./rkmapp-assignments-sidenav.component.less']

})

export class RKMAppAssignmentsSideNavComponent implements OnInit{

  sideNavOpen:boolean = false;
  constructor(){}
  ngOnInit(){}


  onCloseNav(){
    this.sideNavOpen = false;

  }

  onOpenNav(){
    this.sideNavOpen = true;
  }

}
