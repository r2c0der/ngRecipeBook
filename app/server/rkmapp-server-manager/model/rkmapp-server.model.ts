/**
 * Created by Rayvn on 7/13/2017.
 */

export class Server {
 serverID: number;
 serverName: string;
 serverStatus:string;


  constructor(sid: number, sn: string, ss: string){
   this.serverID = sid;
   this.serverName = sn;
   this.serverStatus = ss;
  }

}

