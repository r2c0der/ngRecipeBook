/**
 * Created by Rayvn on 7/13/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Server } from "../../model/rkmapp-server.model";
import {RKMAppServersService} from "../../service/rkmapp-servers.service";

@Component({
  selector: 'rkmapp-server-manager-server',
  templateUrl:'./rkmapp-server-manager-server.component.html',
  styles:[`
    div.container{
      /*padding-top: 7em;*/
      margin-left: 2em;
    }  
    .online{
       color: darkgreen;
      background: lightgreen;
    }
    
    .offline{
      color: maroon;
     background-color: mistyrose;
      
    } 
    
    span{
      padding: 1px;
    }
    h5{
      font-size: 1.25em;
    }
  `]
})

export class RKMAppServerManagerServerComponent implements OnInit{
  server: Server;

  constructor(private _serverService: RKMAppServersService){}
  ngOnInit(){
    this.server = this._serverService.getServer(Math.floor((Math.random()*10)+2));
  }


}
