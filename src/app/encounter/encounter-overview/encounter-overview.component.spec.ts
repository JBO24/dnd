import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterOverviewComponent } from './encounter-overview.component';

describe('EncounterOverviewComponent', () => {
  let component: EncounterOverviewComponent;
  let fixture: ComponentFixture<EncounterOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
