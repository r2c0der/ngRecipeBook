/**
 * Created by Rayvn on 7/13/2017.
 */

import {Component, OnInit} from '@angular/core';
import { User } from "./model/rkmapp-user.model" ;
import { RKMAppUserService } from "../service/rkmapp-user.service";

@Component({
  selector: 'rkmapp-server-manager-users',
  templateUrl: './rkmapp-server-manager-users.component.html',
  styles:[`
  div.container{
 /*   padding-top: 7em;*/
  }
    .admin{
      font-weight:bolder;
      color:mediumblue;
      background-color: cornflowerblue;
      float:right;
      padding:1px;
      
    }
    .user{
      font-weight:bolder;
      color:purple;
      background-color: plum;
      float:right;
      padding:1px;
    }
  `],
  providers:[
    RKMAppUserService
  ]
})

export class RKMAppServerManagerUsersComponent implements OnInit{
    users: User[];
  constructor(private _userService: RKMAppUserService){}
  ngOnInit(){
    this.users = this._userService.getUsers();
  }

}
