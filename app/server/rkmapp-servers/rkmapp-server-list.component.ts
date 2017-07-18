/**
 * Created by Rayvn on 7/2/2017.
 */
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({

   templateUrl:"./rkmapp-servers-list.component.html",
  styles:[`
    div.container{
      padding-top:5em;
    }
    .btn{
      margin-bottom: 3em;
      margin-left: 5em;
    }

    h4{
      color:blue;
      font-family:'Roboto Mono', sans-serif;
      margin-top: 3em;
    }
    label{
      font-size:1.15;
      font-family:'Roboto Mono', sans-serif;
    }
 
  `]


})

export class RKMAppServerListComponent implements

  OnInit{

  allowNewServer = false;
  serverStatusMsg = "No new servers were created.";
  serverName = "Current Server";
  isServerCreated = false;
  servers:any[];


  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit(){
    this.servers = [this.setServerName('AppServer'), this.setServerName('StagingServer'), this.setServerName('TestServer')];

  }

  onAddServer(){

    this.setServerName(this.serverName);
    this.isServerCreated = true;
    this.servers.push(this.getServername());
    this.serverStatusMsg = "New Server was created! Server name is " + this.serverName;

  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;

  }
  setServerName(value){
    this.serverName = value;
  }

  getServername(){
    this.serverName;
  }
}
