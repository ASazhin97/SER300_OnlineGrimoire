import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentNotesComponent } from './equipment-notes.component';

describe('EquipmentNotesComponent', () => {
  let component: EquipmentNotesComponent;
  let fixture: ComponentFixture<EquipmentNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
