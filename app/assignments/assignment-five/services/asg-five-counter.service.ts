/**
 * Created by Rayvn on 7/11/2017.
 */

import {EventEmitter, Injectable} from '@angular/core';


@Injectable()
export class AsgFiveCounterService{

counterActive2Inactive = 0;
counterInactive2Active = 0;

incrementActive2Inactive(){
  this.counterActive2Inactive++;
  console.log("Active2Inactive:" + this.counterActive2Inactive);
}

  incrementInactive2Active(){
    this.counterInactive2Active++;
    console.log("Inactive2Active:" + this.counterInactive2Active);

  }



}
