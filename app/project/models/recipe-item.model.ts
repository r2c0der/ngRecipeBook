import {Ingredient} from "./ingredient-item.model";
/**
 * Created by Rayvn on 7/3/2017.
 */


export class Recipe {
  public recipeNum:number;
  public name:string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

    constructor(recipeNum: number, name: string, desc: string, image: string, ing: Ingredient[] ){
      this.recipeNum = recipeNum;
        this.name = name;
        this.description = desc;
        this.imagePath = image;
        this.ingredients = ing;
    }

}
