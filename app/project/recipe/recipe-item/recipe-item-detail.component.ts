/**
 * Created by Rayvn on 7/3/2017.
 */

import {Component, Input, OnInit} from '@angular/core';
import { Recipe } from "../../models/recipe-item.model";
import { RecipeService } from "../../services/recipe.service";
import { ShoppingListService } from "../../services/shopping-list.service";
import {Ingredient} from "../../models/ingredient-item.model";


@Component({
  selector:'recipe-item-detail',
  templateUrl:"./recipe-item-detail.component.html",
  styles:[` 
    div.container{
      padding-top: 5em
    }
    
    .recipeImg{
      width:45%;
      margin-left:5em;
      border-radius: 2px;
    }
    .recipeDescription{
      width:55%;
      font-family:'Poppins', sans-serif;
      margin-left:5em;
      font-size: 1.15em;
      color:mediumblue;
      padding-top: 1em;
      word-wrap: break-word;
    }
    .recipedName{
      font-family:'Prosto One', sans-serif;
      color:deeppink;
      margin-left: 3em;
      
    }  
    
    .ingredientsList{
      margin-left:6em;
     
      
    }
    .btn-group{
      margin-left:5em;
      margin-bottom: 3em;
    }
    .list-group-item i{
      color: mediumvioletred;
      padding-right:.5em;
    }
    .list-group-item{
      font-family:'Poppins', sans-serif;
      border:none;
    }
    .ingHeaderTxt{
      margin-left:7em;
      font-family:'Poppins', sans-serif;
      font-weight: bolder;
      font-size: 1.25em;
      color: mediumvioletred;
      
    }
    
  `]

})

export class RecipeItemDetailComponent implements OnInit{
 @Input() recipe;

 constructor(private _recipeService: RecipeService, private _shoppingListService: ShoppingListService){}
 ngOnInit(){
   console.log(this.recipe);
 }



  onAddToShoppingList(){
   this._shoppingListService.addIngredients(this.recipe.ingredients);

  }


}
