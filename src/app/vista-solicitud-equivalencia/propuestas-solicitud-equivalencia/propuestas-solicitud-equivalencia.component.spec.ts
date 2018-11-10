import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestasSolicitudEquivalenciaComponent } from './propuestas-solicitud-equivalencia.component';

describe('PropuestasSolicitudEquivalenciaComponent', () => {
  let component: PropuestasSolicitudEquivalenciaComponent;
  let fixture: ComponentFixture<PropuestasSolicitudEquivalenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropuestasSolicitudEquivalenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropuestasSolicitudEquivalenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
