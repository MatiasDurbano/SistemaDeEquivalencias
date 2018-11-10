import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEquivalenciaComponent } from './formulario-equivalencia.component';

describe('FormularioEquivalenciaComponent', () => {
  let component: FormularioEquivalenciaComponent;
  let fixture: ComponentFixture<FormularioEquivalenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEquivalenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEquivalenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
