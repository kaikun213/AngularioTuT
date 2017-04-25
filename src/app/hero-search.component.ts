import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { HeroSearchService } from "./hero-search.service"
import { Hero } from "./hero";


import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';




@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css'],
  providers: [HeroSearchService],
})

export class HeroSearchComponent implements OnInit {

  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();


  constructor(private heroSearchService: HeroSearchService, private router: Router){}

  // Push a search term into the observable stream.
  search(term: string){
    this.searchTerms.next(term);
  }

  ngOnInit() :void{
    this.heroes = this.searchTerms
                      .debounceTime(300)
                      .distinctUntilChanged()
                      // if there is a searchterm, show returned Hero[] Observable otherwise an empty Hero[] Observable
                      .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
                      .catch(error => {
                        // TODO: Add read error handling
                        console.log(error);
                        return Observable.of<Hero[]>([]);
                      })
  }

  // navigate to the details of a hero
  gotoDetail(hero: Hero): void{
    this.router.navigate(['/detail',hero.id])
  }
}
