/**
 * Created by Rayvn on 7/11/2017.
 */
import { Component, OnInit, EventEmitter } from '@angular/core';
import {AsgFiveUsersService} from "../services/asg-five-users.service";


@Component({

  selector: 'asg-five-inactive-users',
  template:`

  <div class="col-md-5">
    <h3>Inactive Users</h3>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let user of inactiveUsers; let i = index">
        {{user}} | <a (click)=" setToActive(i)" style="cursor: pointer;"> Set to Active</a>
      </li>
    </ul>
  </div>

    
  `

})

export class AsgFiveInactiveUsersComponent implements OnInit{

  inactiveUsers:any[] = [];
  constructor(private _usersService: AsgFiveUsersService){

  }
  ngOnInit(){
    this.inactiveUsers = this._usersService.getInactiveUsers();

  }


  setToActive(idx:number){
    this._usersService.setActiveUsers(idx);
  }






}
