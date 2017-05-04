//our root app component
import {Component,Input} from '@angular/core';
import {single,multi} from './data';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bar-chart',
  template: `
    <ngx-charts-bar-vertical-stacked
      [view]="view"
      [scheme]="colorScheme"
      [results]="multi"
      [gradient]="gradient"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      (select)="onSelect($event)">
    </ngx-charts-bar-vertical-stacked>
    <br \>
    <div *ngFor="let hero of single">
    <span> {{hero.name}} </span>
    <span> {{hero.value}} </span>
    <span> {{hero.id}} </span>
    </div>
  `,
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent{
  @Input() single: any[];
  @Input() multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Heroes';
  showYAxisLabel = true;
  yAxisLabel = 'Clicks';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private heroService: HeroService, private router: Router) {
    this.single = [];
    this.multi = [];

    this.heroService.getHeroes().then(heroes => {
      // push all data
      this.PushDataSingle(heroes);
      this.PushDataMulti(heroes);
    });



  }

  PushDataMulti(heroes:Hero[]): any[]{
    return heroes.map(hero => this.multi = [...this.multi, {name:hero.name,
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

  PushDataSingle(heroes:Hero[]): any[]{
    // important to assign single-data to new array, only pushing would not trigger update process
      return heroes.map(hero => this.single = [...this.single, {name:hero.name, value:hero.clicks, id: hero.id}])
  }

  onSelect(event) {
  //  this.router.navigate(['/detail', this.single.find(hero => hero.name == event.name).id]);
    console.log(event);
  }
}
