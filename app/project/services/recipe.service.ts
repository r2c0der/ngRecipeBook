/**
 * Created by Rayvn on 7/11/2017.
 */

import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from "../models/recipe-item.model";
import { Ingredient } from "../models/ingredient-item.model";


@Injectable()

export class RecipeService implements OnInit{
  recipeSelected = new EventEmitter<Recipe>();

  constructor(){}
  ngOnInit(){}


  getRecipes(){
  return this.recipes.slice();
  }

  addItemsToShoppingList(){

  }

  private recipes:Recipe[] = [
    new Recipe(1, "Plantanos", "Delicious, sweet, fried plantains", "https://c1.staticflickr.com/4/3196/3140379632_a366833e49_b.jpg",[
      new Ingredient('Yellow plantains', 1),
      new Ingredient('Olive Oil', .5)

    ]),
    new Recipe(2,"Protein Shake", "Cool refreshing, muscle-building drink", "http://img.aws.livestrongcdn.com/ls-article-image-673/ds-photo/getty/article/176/205/178219261_XS.jpg",[
      new Ingredient('Muscle Milk Whey Protein', 1),
      new Ingredient('Raspberries', 20),
      new Ingredient('Blackberries', 15),
      new Ingredient('Bananas', 20)
    ]),
    new Recipe(3, "Mixed Green Salad", "Healthy, leafy green, goodness", "http://www.vegkitchen.com/wp-content/uploads/2014/08/blueberry-salad8309.jpg",[
        new Ingredient('Mixed Greens ', 13),
        new Ingredient('Cuccumbers', 2),
        new Ingredient('Bell Peppers', 3),
        new Ingredient('Carrots', 4),
        new Ingredient('Bacon Bits', 53),
        new Ingredient('Ginger Thai Salad Dressing', 3),
        new Ingredient('Lime Juice', .33),
        new Ingredient('Fresh Ground Pepper', 1)
      ]

    ),
    new Recipe(4, "Sushi - Califormia Roll", "Perfect for those who don't care much for raw fish","https://static1.squarespace.com/static/513e3332e4b0517c72324ceb/t/5143a48de4b0e93a3198f531/1363387535905/California+Roll+1280.jpg",
      [
        new Ingredient('Dried Seaweed', 17),
        new Ingredient('Chinese Rice', 2),
        new Ingredient('Sesame Seeds', 30),
        new Ingredient('Avocado', 1)
      ]),
    new Recipe(5, "Green Tea Matcha", "Cultural Delight with a hint of ginger and the healing powers of green tea", "https://cdn.authoritynutrition.com/wp-content/uploads/2015/12/matcha-green-tea-with-bamboo-whisk.jpg",[
      new Ingredient('Green Tea Powder', 1),
      new Ingredient('Ginger', 1),
      new Ingredient('Almond Milk', 3),
      new Ingredient('Coconut Sugar', 7)
    ]),
    new Recipe(6, "Iceberg Lettuce Wrap","Something a little lighter and brighter, fresh lettuce wraps are a delicious","http://www.awayfromhomecooking.com/wp-content/uploads/2016/03/Chef-Salad-Lettuce-Wraps610x350.jpg",[
      new Ingredient('Lettuce Leaf', 3),
      new Ingredient('Sauteed Tofu', 6),
      new Ingredient('Bell Peppers', 4),
      new Ingredient('Avocado', 1)
    ]),
    new Recipe(7, "Chia Fresca","Healthy, vitamin-laden beverage that is easy to make.","http://ahappyfooddance.com/wp-content/uploads/2014/01/chia-seed-drink-3.jpg",
      [
        new Ingredient('Chia Seeds', 47),
        new Ingredient('Pomegranate Juice', 2)
      ]),
    new Recipe(8, "Flan","an open, rimmed, pastry or sponge base, containing a sweet or savoury filling.","http://images.media-allrecipes.com/userphotos/250x250/153768.jpg",
      [
        new Ingredient('Flan', 1),
        new Ingredient('Sugar', 2)
      ]),
    new Recipe(9, "Tabouli Salad","or Tabbouleh is a simple salad of very finely chopped vegetables, lots of fresh parsley and bulgur wheat, all tossed with lime juice and olive oil.","http://www.themediterraneandish.com/wp-content/uploads/2016/03/Tabouli-Recipe-6.jpg",[
      new Ingredient('Chopped Spinach ', 13),
      new Ingredient('Bulgur Wheat', 2),
      new Ingredient('Lime Juice', .33),
      new Ingredient('Parsley', 8)
    ])

  ]


}
