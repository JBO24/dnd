import {Component, OnInit} from '@angular/core';
import {MonsterService} from '../../monster/monster.service';
import {Monster} from '../../model/monster';
import {Hero} from '../../model/hero';
import {HeroService} from '../../hero/hero.service';

@Component({
  selector: 'app-encounter-overview',
  templateUrl: './encounter-overview.component.html',
  styleUrls: ['./encounter-overview.component.scss']
})
export class EncounterOverviewComponent implements OnInit {
  private monsters: Monster[];
  private heroes: Hero[];

  constructor(private monsterService: MonsterService, private heroService: HeroService) {
  }

  ngOnInit() {
    this.getMonsters();
    this.getHeroes();
  }

  getMonsters() {
    return this.monsterService.getMonsters().subscribe(monsters => this.monsters = monsters);
  }

  getHeroes() {
    return this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
