/**
 * Created by Rayvn on 7/13/2017.
 */
import {Component, OnDestroy, OnInit} from '@angular/core';
import { User } from "../model/rkmapp-user.model";
import { ActivatedRoute, Params } from "@angular/router";
import { RKMAppUserService } from "../../service/rkmapp-user.service";
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'rkmapp-server-manager-user',
  templateUrl:'./rkmapp-server-manager-user.component.html',
  styles:[`
  div.container{
    padding-top: 5em;
  }
  .admin{
    font-weight:bolder;
    color:mediumblue;
    background-color: cornflowerblue;
    
    padding:1px;

  }
  .user{
    font-weight:bolder;
    color:purple;
    background-color: plum;
    padding:1px;
  }
  `]
})

export class RKMAppServerManagerUserComponent implements OnInit, OnDestroy{
     user:User;
     isErrorMessage: boolean = false;
     userParamsSubscription: Subscription;

  constructor(private _activatedRoute: ActivatedRoute,
              private _userService: RKMAppUserService){}
  ngOnInit(){
this.user = {
      userID: this._activatedRoute.snapshot.params['userID'],
      userFirstName: this._activatedRoute.snapshot.params['userFirstName'],
      userLastName: this._activatedRoute.snapshot.params['userLastName'],
      userPermission: this._activatedRoute.snapshot.params['userPermission']
    }

     if(this._activatedRoute.snapshot.params['userID'] > 1){

       this.user = this._userService.getUser(this._activatedRoute.snapshot.params['userID']);
       console.log("User Component: User Returned");
       console.log(this.user);
     } else{
       this.user = this._userService.getUser(this._activatedRoute.snapshot.params[1]);
     }

     this.userParamsSubscription = this._activatedRoute.params.subscribe(
       (params: Params) => {
         this.user = this._userService.getUser(params['userID']);
       }

     );

  }


  ngOnDestroy(){
    this.userParamsSubscription.unsubscribe();
  }




}
