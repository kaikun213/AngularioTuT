import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css'],
})

export class HeroesComponent implements OnInit  {
	// myHero
	myHero : Hero;
	onSelect(hero: Hero): void {
		this.myHero = hero;
	}

 	 // Heroes Data Service
  heroes: Hero[];

	constructor(private heroService: HeroService,
              private router : Router) {}

  gotoDetail(): void {
    this.router.navigate(['/detail', this.myHero.id]);
  }

	getHeroes(): void {
		// Promises : If the server returns data (heroes) set this.heroes
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit(): void {
		this.getHeroes();
	}
}
