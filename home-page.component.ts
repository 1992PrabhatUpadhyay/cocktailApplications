import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  // cocktails: any[] = [];
  cocktailName = 'Margarita';
  constructor(private router: Router) { }
  // ngOnInit(): void {
  //   this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Margarita')
  //     .subscribe((data: any) => {
  //       this.cocktails = data.drinks;
  //     });
  // }
  // goToCocktailPage(cocktailName: string): void {
  //   this.router.navigate(['/cocktail-page', cocktailName]);
  // }
  goToCocktailPage() {
    this.router.navigate(['/cocktail', this.cocktailName]);
  }
}
