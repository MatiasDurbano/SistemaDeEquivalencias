import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMateriaDocenteComponent } from './form-materia-docente.component';

describe('FormMateriaDocenteComponent', () => {
  let component: FormMateriaDocenteComponent;
  let fixture: ComponentFixture<FormMateriaDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMateriaDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMateriaDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
