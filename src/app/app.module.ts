import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { MyHeroDetailComponent } from './my-hero-detail.component';
import { HeroesComponent } from './heroes.component'
import { HeroService } from './hero.service'
import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from "./hero-search.component"
import { BarChartComponent } from './charts/bar-chart.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

//imports for ngxcharts
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports:      [ BrowserModule,
		              FormsModule,
                  AppRoutingModule,
                  HttpModule,
                  InMemoryWebApiModule.forRoot(InMemoryDataService),
                  NgxChartsModule,
                  BrowserAnimationsModule,
                ],
  declarations: [ AppComponent,
			            MyHeroDetailComponent,
                  HeroesComponent,
                  DashboardComponent,
                  HeroSearchComponent,
                  BarChartComponent,
                ],
  providers:    [HeroService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
