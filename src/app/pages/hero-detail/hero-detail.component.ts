import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../../services/Hero/hero.service';
import { Hero } from 'src/app/models/Hero';

@Component({
   selector: 'app-hero-detail',
   templateUrl: './hero-detail.component.html',
   styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
   @Input() hero: Hero;
   constructor(
      private route: ActivatedRoute,
      private heroService: HeroService,
      private location: Location
   ) {}

   ngOnInit(): void {
      this.getHero();
   }

   getHero(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
   }

   goBack(): void {
      this.location.back();
   }

   save(): void {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
   }
}
