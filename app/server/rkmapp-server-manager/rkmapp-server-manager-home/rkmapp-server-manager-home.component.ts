/**
 * Created by Rayvn on 7/13/2017.    **/

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

 @Component({
  selector: 'rkmapp-server-manager-home',
   template:`
     <h2> Welcome Server Manager 4.0</h2>
     <p> Manage your Servers and Users </p>
     <button class="btn btn-primary" (click)="onLoadServers()">Load Servers</button>
   `,
   styles:[`
     div.container{
       padding-top:7em;
     }
  
   `]
})

 export class RKMAppServerManagerHomeComponent implements OnInit{
  constructor(private _router: Router ){}
  ngOnInit(){}

  onLoadServers(){
     this._router.navigate(['/servers'])
  }


}

