import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { MyHeroDetailComponent }  from './my-hero-detail.component';

const routes : Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  // redirect router
  {
    path:'',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path:'detail/:id',
    component: MyHeroDetailComponent
  },
]



@NgModule({
    imports: [
      RouterModule.forRoot([routes])
    ],
    exports: [
      RouterModule
    ],
})

export class AppRoutingModule{}
