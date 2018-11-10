import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSolicitudEquivalenciaComponent } from './tabla-solicitud-equivalencia.component';

describe('TablaSolicitudEquivalenciaComponent', () => {
  let component: TablaSolicitudEquivalenciaComponent;
  let fixture: ComponentFixture<TablaSolicitudEquivalenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaSolicitudEquivalenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaSolicitudEquivalenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
