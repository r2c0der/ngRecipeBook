/**
 * Created by Rayvn on 7/3/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../models/recipe-item.model";
import { RecipeService } from "../../services/recipe.service";

@Component({
  selector:'recipe-item',
  templateUrl:"./recipe-item.component.html",
  styles:[`
    div.container{
      padding-top: 5em;
    }

    .recipeImg{
      max-height: 8em;
    }
    
    .list-group-item{
        border-bottom: solid 2px mediumvioletred;
      border-right: solid 3px mediumvioletred;
    }
    .list-group-item:hover{
      border-bottom: solid 2px green;
      border-right: solid 3px darkgreen;
    }
    .list-group-item-heading{
      font-size: 1.25em;
      color:blue !important;
      font-family:'Poppins', sans-serif;
    }
    .list-group-item-text{
      font-size: 1.15em;
    }

  `]

})

export class RecipeItemComponent implements OnInit{
 @Input() recipe:Recipe;

 constructor(private _recipeService: RecipeService){}
 ngOnInit(){

 }
onSelected(){
   this._recipeService.recipeSelected.emit(this.recipe);
}

}

