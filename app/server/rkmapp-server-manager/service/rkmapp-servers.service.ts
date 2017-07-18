/**
 * Created by Rayvn on 7/13/2017.
 */
import { Injectable } from '@angular/core';
import { Server } from "../model/rkmapp-server.model";

@Injectable()
export class RKMAppServersService{

  getServers(){

     return this.servers.slice();
  }
  getServer(id: number){
    const server = this.servers.find(
      (srvr) => { return srvr.serverID === id; }
    )
    return server;

  }

  updateServer(srv:Server){
      const server = this.servers.find(
        (srvr) => {
          return srvr.serverID === srv.serverID;
        }

      );

      if(server){
        server.serverName = srv.serverName;
        server.serverStatus = srv.serverStatus;

      }

  }




  servers:Server[] = [
    {
    serverID: 1,
    serverName: 'Web Server',
    serverStatus: 'offline'
  },
    {
      serverID: 2,
      serverName: 'Dev Server',
      serverStatus: 'offline'
    },
    {
      serverID: 3,
      serverName: 'AWS Server',
      serverStatus: 'online'
    },
    {
      serverID: 4,
      serverName: 'App1 Server',
      serverStatus: 'online'
    },
    {
      serverID: 5,
      serverName: 'App2 Server',
      serverStatus: 'offline'
    },
    {
      serverID: 6,
      serverName: 'SQL1 Server',
      serverStatus: 'online'
    },
    {
      serverID: 7,
      serverName: 'SQL2 Server',
      serverStatus: 'offline'
    },
    {
      serverID: 8,
      serverName: 'Staging Server',
      serverStatus: 'online'
    },
    {
      serverID: 9,
      serverName: 'QA/Test Server',
      serverStatus: 'online'
    },
    {
      serverID: 10,
      serverName: 'Prod1 Server',
      serverStatus: 'online'
    },
    {
      serverID: 11,
      serverName: 'Prod2_VM Server',
      serverStatus: 'offline'
    }



  ]

}
