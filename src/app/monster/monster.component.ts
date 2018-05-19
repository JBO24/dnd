import { Component, OnInit } from '@angular/core';
import { Monster } from '../model/monster';
import {MonsterService} from './monster.service';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})
export class MonsterComponent implements OnInit {
  private monsters: Monster[];

  constructor(private monsterService: MonsterService) {
  }

  ngOnInit() {
    this.getMonsters();
  }

  getMonsters(): void {
    this.monsterService.getMonsters().subscribe(monsters => this.monsters = monsters);
  }

}
