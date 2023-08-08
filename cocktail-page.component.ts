import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cocktail-page',
  templateUrl: './cocktail-page.component.html',
  styleUrls: ['./cocktail-page.component.css']
})
export class CocktailPageComponent {
  cocktails: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    this.route.paramMap.subscribe(params => {
      const cocktailName = params.get('id');
      this.fetchCocktails(cocktailName);
    });
  }
  fetchCocktails(cocktailName: string) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`;
    this.http.get<any>(url).subscribe(data => {
      this.cocktails = data.drinks;
    });
  }
  goToIngredientPage(cocktail: any) {
    this.router.navigate(['/ingredient', cocktail.idDrink]);
  }
}
