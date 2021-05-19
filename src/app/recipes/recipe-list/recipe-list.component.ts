import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://get.pxhere.com/photo/dish-food-cuisine-ingredient-meat-taco-meal-produce-salad-side-dish-recipe-fried-food-mexican-food-lunch-american-food-brunch-appetizer-Tex-mex-food-greek-food-Latin-american-food-mixed-grill-1557385.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://get.pxhere.com/photo/dish-food-cuisine-ingredient-meat-taco-meal-produce-salad-side-dish-recipe-fried-food-mexican-food-lunch-american-food-brunch-appetizer-Tex-mex-food-greek-food-Latin-american-food-mixed-grill-1557385.jpg'
    ),
  ];
}
