import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalNotesComponent } from './goal-notes.component';

describe('GoalNotesComponent', () => {
  let component: GoalNotesComponent;
  let fixture: ComponentFixture<GoalNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
