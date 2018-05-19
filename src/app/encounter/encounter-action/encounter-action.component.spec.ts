import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterActionComponent } from './encounter-action.component';

describe('EncounterActionComponent', () => {
  let component: EncounterActionComponent;
  let fixture: ComponentFixture<EncounterActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
