
/**
 * Created by Rayvn on 7/3/2017.
 */
import {Component, ElementRef, ViewChild,  OnInit} from '@angular/core';
import { Ingredient } from "../models/ingredient-item.model";
import { ShoppingListService } from "../services/shopping-list.service";

@Component({
  selector:'shopping-list-edit',
  templateUrl:"./shopping-list-edit.component.html",
  styles:[`
 
  `]

})

export class ShoppingListEditComponent implements OnInit{

  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('nameInput') nameInputRef : ElementRef;


  constructor(private _shoppingListService: ShoppingListService){}
  ngOnInit(){
  }



onAddIngredient(){
let ingName = this.nameInputRef.nativeElement.value;
let ingAmount = this.amountInputRef.nativeElement.value;
let newIngredient = new Ingredient(ingName,ingAmount);
  this._shoppingListService.addIngredient(newIngredient);

  }


  deleteIngredient(){

  }


}

