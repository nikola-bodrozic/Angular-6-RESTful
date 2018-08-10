import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  template: `
  <h3>Top Heroes</h3>
<div class="grid grid-pad">
  <a *ngFor="let h of he$ | async" class="col-1-4">
    <div class="module hero">
      <h4>{{h.name}}</h4>
    </div>
  </a>
</div>

<app-hero-search></app-hero-search>`,
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  he$: Observable<Hero[]>;
  her: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.he$ = this.heroService
    .getHeroes2()
    .pipe(
      map(tuna => tuna.splice(0,4)),
      tap(
        (tuna) => {
          console.log(tuna);
      })
    );
  }
}
