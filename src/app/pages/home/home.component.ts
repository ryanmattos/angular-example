import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/Hero';
import { HeroService } from '../../services/Hero/hero.service';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
   heroes: Hero[] = [];

   constructor(private heroService: HeroService) {}

   ngOnInit() {
      this.getHeroes();
   }

   getHeroes(): void {
      this.heroService
         .getHeroes()
         .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
   }
}
