/**
 * Created by Rayvn on 7/13/2017.
 */

/** ANGULAR **/
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

/** SERVER MANAGER MAIN **/
import {RKMAppServerManagerComponent } from "./rkmapp-server-manager.component";
import { RKMAppServerManagerHomeComponent } from "./rkmapp-server-manager-home/rkmapp-server-manager-home.component";


/** USERS **/
import { RKMAppServerManagerUsersComponent } from "./rkmapp-server-manager-users/rkmapp-server-manager-users.component";
import { RKMAppServerManagerUserComponent } from "./rkmapp-server-manager-users/rkmapp-server-manager-user/rkmapp-server-manager-user.component";


/** SERVERS **/
import { RKMAppServerManagerServersComponent } from "./rkmapp-server-manager-servers/rkmapp-server-manager-servers.component";
import { RKMAppServerManagerEditServerComponent } from "./rkmapp-server-manager-servers/rkmapp-server-manager-edit-server/rkmapp-server-manager-edit-server.component";





const RKMAppServerManagerRoutes:Routes = [
  { path: 'servermanager', component: RKMAppServerManagerComponent },
  { path: 'servers', component: RKMAppServerManagerServersComponent},
  { path: 'servers/:serverID', component: RKMAppServerManagerEditServerComponent},
  { path: 'users', component: RKMAppServerManagerUsersComponent},
  { path: 'users/:userID', component: RKMAppServerManagerUserComponent},
  { path: 'users/:userID/:userFirstName/:userLastName/:userPermission',
    component: RKMAppServerManagerUserComponent},

]

@NgModule({
  imports:[
    RouterModule.forChild(RKMAppServerManagerRoutes)
  ],
  exports:[
    RouterModule

  ]
})


export class RKMAppsServerManagerRoutesModule{}
