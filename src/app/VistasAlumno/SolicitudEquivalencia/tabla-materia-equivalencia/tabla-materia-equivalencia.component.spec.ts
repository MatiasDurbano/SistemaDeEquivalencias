
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMateriaEquivalenciaComponent } from './tabla-materia-equivalencia.component';

describe('TablaMateriaEquivalenciaComponent', () => {
  let component: TablaMateriaEquivalenciaComponent;
  let fixture: ComponentFixture<TablaMateriaEquivalenciaComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaMateriaEquivalenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaMateriaEquivalenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
