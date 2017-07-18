/**
 * Created by Rayvn on 7/13/2017.
 */
import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {Server } from "../model/rkmapp-server.model";
import { RKMAppServersService } from "../service/rkmapp-servers.service";

@Component({
  selector: 'rkmapp-server-manager-servers',
  templateUrl:'./rkmapp-server-manager-servers.component.html',
  styles:[`
   div.container{
    /* padding-top: 7em;*/
   }
   .online{
     color: darkgreen;
     font-weight:bolder;
     background: lightgreen;
     padding:2px;
     float:right;
   }

   .offline{
     font-weight:bolder;
     padding:2px;
     float:right;
     color: maroon;
     background-color: mistyrose;
   }
  `],
  providers:[
    RKMAppServersService
  ]
})

export class RKMAppServerManagerServersComponent implements OnInit{
  servers: Server[] = [];
  constructor(private _serversService: RKMAppServersService, private _router: Router, private _activatedRoute: ActivatedRoute){}
  ngOnInit(){
     this.servers =  this._serversService.getServers();
     console.log(this.servers);
  }

  onReload(){
  }


}
