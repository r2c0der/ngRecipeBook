/**
 * Created by Rayvn on 7/11/2017.
 */
import {EventEmitter, Injectable } from '@angular/core';
import { AsgFiveCounterService } from "../services/asg-five-counter.service";




@Injectable()
export class AsgFiveUsersService{

  constructor(private _counterService: AsgFiveCounterService){}


  setInactiveUsers(idx:number){
    this.inactiveUsers.push(this.activeUsers[idx]);
    this.activeUsers.splice(idx, 1);
    this._counterService.incrementActive2Inactive();

  }

  setActiveUsers(idx:number){
    this.activeUsers.push(this.inactiveUsers[idx]);
    this.inactiveUsers.splice(idx, 1);
    this._counterService.incrementInactive2Active();

  }

  getInactiveUsers(){
    return this.inactiveUsers;
  }

  getActiveUsers(){
    return this.activeUsers;
  }

  inactiveUsers = [
    'Camille','Donna','Edan','Victor','Kenny','Krysta','Tina','Angela','Cheryl','Brentlee']
  activeUsers = ['Emahlah','Guy','Ashli','Danny','Iman','Dana','Lezlie','Olivia','Kayla'
  ]

}

