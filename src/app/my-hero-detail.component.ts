import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';
import { Location }									from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-hero-detail',
	templateUrl: './my-hero-detail.component.html',
	styleUrls: ['my-hero-detail.component.css'],
	})

export class MyHeroDetailComponent implements OnInit{
	@Input() selectedHero: Hero;

	constructor(private heroService: HeroService,
		 					private route: ActivatedRoute,
							private location: Location){ }

	ngOnInit(): void {
		this.route.params
			.switchMap((params:Params) => this.heroService.getHero(+params['id']))
				.subscribe(hero => this.selectedHero = hero);
	}

	goBack(): void {
		this.location.back();
	}

	save(): void{
		this.heroService.update(this.selectedHero)
										.then(() => this.goBack());
	}
}
