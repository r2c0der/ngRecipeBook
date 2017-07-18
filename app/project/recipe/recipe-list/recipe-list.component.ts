/**
 * Created by Rayvn on 7/3/2017.
 */
import { Component, OnInit} from '@angular/core';
import { Recipe } from "../../models/recipe-item.model";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector:'recipe-list',
  templateUrl:"./recipe-list.component.html",
  styleUrls: [`./recipe-list.component.less`]

})

export class RecipeListComponent implements OnInit{
  recipes: Recipe[];


     constructor(private _recipeService: RecipeService){}
     ngOnInit(){
       this.recipes = this._recipeService.getRecipes();

     }



}


