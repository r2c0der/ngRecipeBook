/**
 * Created by Rayvn on 7/11/2017.
 */

import { Component, OnInit} from '@angular/core';
import { AsgFiveUsersService } from "../services/asg-five-users.service";


@Component({
  selector: 'asg-five-active-users',
  template:`
  
          <div class="col-md-5">
            <h3>Active Users</h3>
            <ul class="list-group">
              <li class="list-group-item" *ngFor="let user of activeUsers; let i = index">
                {{user}} | <a (click)="setToInactive(i)" style="cursor: pointer;"> Set to Inactive</a>
              </li>
            </ul>
            
          </div>


  `

})

export class AsgFiveActiveUsersComponent implements OnInit{
  activeUsers:any[] = [];

  constructor(private _usersService: AsgFiveUsersService){

  }
  ngOnInit(){
    this.activeUsers = this._usersService.getActiveUsers();
  }

  setToInactive(idx:number){

    this._usersService.setInactiveUsers(idx);
  }



}
