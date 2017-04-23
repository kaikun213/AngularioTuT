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

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports:      [ BrowserModule,
		              FormsModule,
                  AppRoutingModule,
                  HttpModule,
                  InMemoryWebApiModule.forRoot(InMemoryDataService),
                ],
  declarations: [ AppComponent,
			            MyHeroDetailComponent,
                  HeroesComponent,
                  DashboardComponent,
                ],
  providers:    [HeroService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
