/**
 * Created by Rayvn on 7/13/2017.
 */
import {Component, OnInit} from '@angular/core';
import { Server } from "../../model/rkmapp-server.model";
import {RKMAppServersService} from "../../service/rkmapp-servers.service";

@Component({
  selector: 'rkmapp-server-manager-edit-server',
  templateUrl:'./rkmapp-server-manager-edit-server.component.html',
  styles:[`
  div.container{
    margin-left:2em;
  }
  `]
})

export class RKMAppServerManagerEditServerComponent implements OnInit{
  server: Server;
  servername = "";
  serverstatus = "";
  constructor(private _serverService: RKMAppServersService){}
  ngOnInit(){
       this.server = this._serverService.getServer(Math.floor((Math.random()*10)+2));
        this.servername = this.server.serverName;
        this.serverstatus = this.server.serverStatus;

  }

  onUpdateServer(){
    let newServer: Server;

    newServer = {
      serverID: this.server.serverID,
      serverName: this.servername,
      serverStatus: this.serverstatus
    }

    this._serverService.updateServer(newServer);
  }


}
