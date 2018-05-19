import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Monster } from '../model/monster';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class MonsterService {
  url = '../../assets/monsters.json';

  constructor(private http: HttpClient) {
  }

  getMonsters(): Observable<Monster[]> {
    return this.http.get<Monster[]>(this.url);
  }
}
