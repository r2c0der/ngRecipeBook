import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RKMAppAssignmentsModule } from "./assignments/rkmapp-assignments.module";
import { RKMAppServerManagerModule } from "./server/rkmapp-server-manager/rkmapp-server-manager.module";
import { RKMAppComponent } from './rkm-app.component';
import { RKMAppNavbarComponent } from "./ui/rkmapp-navbar.component";
import { SimpleTimer } from 'ng2-simple-timer';

import { RKMAppRoutes } from "./rkmapp.routes";

/** SERVERS **/
import { RKMAppServerComponent } from "./server/rkmapp-servers/rkmapp-server.component";
import { RKMAppServerListComponent } from "./server/rkmapp-servers/rkmapp-server-list.component";

/** PROJECT **/
import { ProjectIndexComponent } from "./project/project-index.component";
import { ProjectHeaderComponent } from "./project/project-ui/project-header.component";
import { ShoppingListComponent } from "./project/shopping/shopping-list.component";
import { ShoppingListEditComponent } from "./project/shopping/shopping-list-edit.component";
import { RecipeListComponent } from "./project/recipe/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./project/recipe/recipe-item/recipe-item.component"
import { RecipeItemDetailComponent } from "./project/recipe/recipe-item/recipe-item-detail.component";
import { RecipeComponent } from "./project/recipe/recipe.component";
import { DropdownMenuDirective } from "./project/directives/dropdown-menu.directive";
import { RecipeService } from "./project/services/recipe.service";
import { ShoppingListService } from "./project/services/shopping-list.service";

/** MAX SERVER MANAGER **/
import { MaxAppSvrMgrModule } from "./max_srvmgr/max-app-svrmgr.module";

@NgModule({
  declarations: [
    RKMAppComponent,
    RKMAppNavbarComponent,


    RKMAppServerComponent,
    RKMAppServerListComponent,

    ProjectIndexComponent,
    ProjectHeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeItemDetailComponent,
    RecipeComponent,
    DropdownMenuDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(RKMAppRoutes),
    RKMAppAssignmentsModule,
    RKMAppServerManagerModule,
    MaxAppSvrMgrModule
  ],
  providers: [
    SimpleTimer,
    RecipeService,
    ShoppingListService
  ],
  bootstrap: [RKMAppComponent]
})
export class AppModule { }
