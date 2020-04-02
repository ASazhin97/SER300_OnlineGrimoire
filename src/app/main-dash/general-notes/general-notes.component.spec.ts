import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralNotesComponent } from './general-notes.component';

describe('GeneralNotesComponent', () => {
  let component: GeneralNotesComponent;
  let fixture: ComponentFixture<GeneralNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
