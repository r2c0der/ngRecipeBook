/**
 * Created by Rayvn on 7/11/2017.
 */
import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from "../models/ingredient-item.model";


@Injectable()

export class ShoppingListService implements OnInit{
  ingredientChanged = new EventEmitter<Ingredient[]>();

  constructor(){}
  ngOnInit(){}


  addIngredient(item:Ingredient){

        this.ingredients.push(item);
         this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(item: Ingredient[]){
    this.ingredients.push(...item);
    this.ingredientChanged.emit(this.ingredients.slice());


  }

  deleteIngredient(idx:number){
    this.ingredients.splice(idx, 1);
  }

  getIngredients(){
    return this.ingredients.slice();
   }

   private ingredients:Ingredient[] = [

    new Ingredient('Cashew Milk', 3),
    new Ingredient('Lettuce', 2),
    new Ingredient('Carrots', 7),
    new Ingredient('Bell Peppers', 4),
    new Ingredient('Cilantro', 1),
    new Ingredient('Greek Yogurt', 10),
    new Ingredient('Shiratake Mushrooms', 9),
    new Ingredient('Mini Baby Bell Cheese', 20),


  ];
}
