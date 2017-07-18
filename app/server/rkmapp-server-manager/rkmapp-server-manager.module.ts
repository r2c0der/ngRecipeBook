/**
 * Created by Rayvn on 7/14/2017.
 */

import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


/** SERVER MANAGER MAIN **/
import {RKMAppServerManagerComponent } from "./rkmapp-server-manager.component";
import {RKMAppServerManagerHomeComponent} from "./rkmapp-server-manager-home/rkmapp-server-manager-home.component";
import {RKMAppServersService} from "./service/rkmapp-servers.service";
import {RKMAppUserService} from "./service/rkmapp-user.service";
import { RKMAppsServerManagerRoutesModule } from "./rkmapp-server-manager-routes.module";


/** USERS **/
import { RKMAppServerManagerUsersComponent } from "./rkmapp-server-manager-users/rkmapp-server-manager-users.component";
import {RKMAppServerManagerUserComponent} from "./rkmapp-server-manager-users/rkmapp-server-manager-user/rkmapp-server-manager-user.component";



/** SERVERS **/
import {RKMAppServerManagerServerComponent} from "./rkmapp-server-manager-servers/rkmapp-server-manager-server/rkmapp-server-manager-server.component";
import {RKMAppServerManagerEditServerComponent} from "./rkmapp-server-manager-servers/rkmapp-server-manager-edit-server/rkmapp-server-manager-edit-server.component";
import { RKMAppServerManagerServersComponent } from "./rkmapp-server-manager-servers/rkmapp-server-manager-servers.component";



@NgModule({
 declarations:[
   RKMAppServerManagerComponent,
   RKMAppServerManagerHomeComponent,
   RKMAppServerManagerUsersComponent,
   RKMAppServerManagerUserComponent,
   RKMAppServerManagerServersComponent,
   RKMAppServerManagerEditServerComponent,
   RKMAppServerManagerServerComponent,

 ],
  imports:[
    CommonModule,
    FormsModule,
    RKMAppsServerManagerRoutesModule


  ],
  providers:[
    RKMAppUserService,
    RKMAppServersService

  ]

})

export class RKMAppServerManagerModule{}
