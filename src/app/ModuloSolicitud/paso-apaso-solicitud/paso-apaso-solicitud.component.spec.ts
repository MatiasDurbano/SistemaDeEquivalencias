import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasoAPasoSolicitudComponent } from './paso-apaso-solicitud.component';

describe('PasoAPasoSolicitudComponent', () => {
  let component: PasoAPasoSolicitudComponent;
  let fixture: ComponentFixture<PasoAPasoSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasoAPasoSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasoAPasoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
