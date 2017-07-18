/**
 * Created by Rayvn on 6/30/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'rkm-app-server',
  templateUrl:'./rkmapp-server.component.html',
  styles:[`
  h2{
    color:purple;
  }
  .container{
    margin-top:2em;
   
  }
    .well {
      font-size: 1.25em;
      font-family: 'Arimo', sans-serif;
      background-color: mistyrose;
      color: #222222;
    }
    .online{
       background-color:palegreen;
       color:darkgreen;
    }
    
    .offline{
      background-color:mistyrose;
      color:darkred;
    }
  `]


})

export class RKMAppServerComponent{
  serverName: string = 'Web Server';
  serverID:number = 20;
  serverStatus: string;

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(){
    return this.serverStatus;
  }



 changeBackgroundColor(){

    return this.serverStatus == 'online' ? 'lightgreen' : 'mistyrose';
 }
  changeFontColor(){

    return this.serverStatus == 'online' ? 'darkgreen' : 'red';
  }


}
