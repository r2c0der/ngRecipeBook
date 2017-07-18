
/**
 * Created by Rayvn on 7/3/2017.
 */
import { Component, OnInit, Input} from '@angular/core';
import { Ingredient } from "../models/ingredient-item.model";
import { ShoppingListService } from "../services/shopping-list.service";

@Component({
  selector:'shopping-list',
  templateUrl:"./shopping-list.component.html",
  styles:[`    
  `]

})

export class ShoppingListComponent implements OnInit{
     ingredients:Ingredient[] = [];

     constructor(private _shoppingListService: ShoppingListService){}

     ngOnInit(){
          this.ingredients =  this._shoppingListService.getIngredients();
          this._shoppingListService.ingredientChanged.
          subscribe((ingredients:Ingredient[]) =>
             {
               this.ingredients = ingredients;

             });
     }


}
