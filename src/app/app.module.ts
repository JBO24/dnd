import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MonsterComponent} from './monster/monster.component';
import {EncounterComponent} from './encounter/encounter.component';
import {HttpClientModule} from '@angular/common/http';
import {MonsterService} from './monster/monster.service';
import {HeroComponent} from './hero/hero.component';
import {HeroService} from './hero/hero.service';
import {EncounterOverviewComponent} from './encounter/encounter-overview/encounter-overview.component';
import {EncounterActionComponent} from './encounter/encounter-action/encounter-action.component';
import {RouterModule, Routes} from '@angular/router';
import { EncounterListComponent } from './encounter/encounter-overview/encounter-list/encounter-list.component';
import { EncounterDetailComponent } from './encounter/encounter-overview/encounter-detail/encounter-detail.component';

const routes: Routes = [
  {path: 'heroes', component: HeroComponent},
  {path: 'monsters', component: MonsterComponent},
  {path: 'encounters', component: EncounterDetailComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    MonsterComponent,
    EncounterComponent,
    HeroComponent,
    EncounterOverviewComponent,
    EncounterActionComponent,
    EncounterDetailComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [MonsterService, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
