import { Component, OnInit } from '@angular/core';
import {Monster} from '../../model/monster';
import {MonsterService} from '../../monster/monster.service';
import {Hero} from '../../model/hero';
import {HeroService} from '../../hero/hero.service';

@Component({
  selector: 'app-encounter-action',
  templateUrl: './encounter-action.component.html',
  styleUrls: ['./encounter-action.component.scss']
})
export class EncounterActionComponent implements OnInit {
  private monsters: Monster[];
  private heroes: Hero[];

  constructor(private monsterService: MonsterService, private heroService: HeroService) { }

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
