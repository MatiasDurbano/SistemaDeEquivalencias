import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMateriaEquivalenciaComponent } from './form-materia-equivalencia.component';

describe('FormMateriaEquivalenciaComponent', () => {
  let component: FormMateriaEquivalenciaComponent;
  let fixture: ComponentFixture<FormMateriaEquivalenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMateriaEquivalenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMateriaEquivalenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
