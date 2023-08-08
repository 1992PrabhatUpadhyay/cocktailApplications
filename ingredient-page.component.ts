import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ingredient-page',
  templateUrl: './ingredient-page.component.html',
  styleUrls: ['./ingredient-page.component.css']
})
export class IngredientPageComponent {
  selectedCocktail: any;
  ingredients: string[] = [];
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.route.paramMap.subscribe(params => {
      const cocktailId = params.get('id');
      this.fetchCocktailDetails(cocktailId);
    });
  }
  fetchCocktailDetails(cocktailId: string) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;
    this.http.get<any>(url).subscribe(data => {
      this.selectedCocktail = data.drinks[0];
      this.extractIngredients();
    });
  }
  extractIngredients() {
    // Assuming the ingredients are in 'strIngredient1' to 'strIngredient15' properties
    for (let i = 1; i <= 15; i++) {
      const ingredient = this.selectedCocktail[`strIngredient${i}`];
      if (ingredient) {
        this.ingredients.push(ingredient);
      }
    }
  }
}
