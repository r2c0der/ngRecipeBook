/**
 * Created by Rayvn on 7/3/2017.
 */
import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../services/recipe.service";
import { Recipe } from "../models/recipe-item.model";

@Component({
  selector:'recipes',
  templateUrl:"./recipe.component.html",
  styles:[`
   
  `],
  providers:[
    RecipeService
  ]

})

export class RecipeComponent implements OnInit{
   selectedRecipe: Recipe;

   constructor(private _recipeService: RecipeService){

   }  ngOnInit(){

        this._recipeService.recipeSelected.subscribe((recipe: Recipe )=> this.selectedRecipe = recipe);
      }



}
