import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit{
  myData: any[] = [];
  heroes: Hero[] = [];
  constructor(private heroService : HeroService){}

  ngOnInit() : void {
    this.heroService.getHeroes().then( heroes => {
                                                  // push all data
                                                  this.PushDataMulti(heroes);
                                                  this.heroes = heroes.slice(1,5)
                                                });
  }

  PushDataMulti(heroes:Hero[]): any[]{
    return this.heroes.map(hero => this.myData = [...this.myData, {name:hero.name,
                                                            series: [
                                                              {
                                                                name: "clicks",
                                                                value: hero.clicks
                                                              },
                                                               {
                                                                 name: "id",
                                                                 value: hero.id,
                                                               }
                                                            ]}]);
  }
}
