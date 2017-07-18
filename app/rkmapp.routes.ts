/**
 * Created by Rayvn on 7/2/2017.
 */

/**** ANGULAR SPECIFIC **/
import { RKMAppComponent } from "./rkm-app.component";
import { Routes } from '@angular/router';

/**** PROJECT **/
import { ProjectIndexComponent } from "./project/project-index.component";

/**** SERVER TEST APP **/
import { RKMAppServerComponent }  from "./server/rkmapp-servers/rkmapp-server.component";
import {RKMAppServerListComponent} from "./server/rkmapp-servers/rkmapp-server-list.component";





export const RKMAppRoutes:Routes = [
  /*{ path: 'results', component: FBSearchResultsListComponent, resolve:
   { results:FBSearchResultsListResolverService} },*/
  { path: 'home', component: RKMAppComponent },
  { path: 'serverlist', component: RKMAppServerListComponent },
  { path: 'project', component: ProjectIndexComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];
