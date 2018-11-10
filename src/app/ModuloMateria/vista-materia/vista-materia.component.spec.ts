import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMateriaComponent } from './vista-materia.component';

describe('VistaMateriaComponent', () => {
  let component: VistaMateriaComponent;
  let fixture: ComponentFixture<VistaMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
